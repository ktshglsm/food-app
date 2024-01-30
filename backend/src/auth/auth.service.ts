import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from './dto/register.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { VerificationTokenDto } from './dto/verification-token.dto';
import { UserRoles } from 'src/user/enums/roles.enum';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async register(registerUserDto: RegisterUserDto): Promise<User> {
    const phoneExists = await this.userRepository.exists({
      where: {
        phone: registerUserDto.phone,
      },
    });

    if (phoneExists) {
      throw new BadRequestException('Phone number already exists.');
    }

    const existedUser = await this.userRepository.findOne({
      where: { email: registerUserDto.email },
    });

    if (existedUser) {
      if (existedUser.isVerified) {
        throw new BadRequestException('Email has been verified.');
      } else {
        throw new UnauthorizedException(
          {
            email: existedUser.email,
          },
          'Email has been registered but not authenticated.',
        );
      }
    }

    const hashPassword = await this.hashPassword(registerUserDto.password);

    const newUser = await this.userRepository.save({
      ...registerUserDto,
      password: hashPassword,
    });

    if (newUser.role === UserRoles.RESTAURANT) {
      const newRestaurant = this.restaurantRepository.create({
        user: newUser,
      });
      await this.restaurantRepository.save(newRestaurant);
    }

    return newUser;
  }

  async verify({ token }: VerificationTokenDto): Promise<void> {
    const email = await this.verifyEmailToken(token);

    const existedUser = await this.userRepository.findOne({
      where: { email },
    });

    if (!existedUser) {
      throw new BadRequestException('Email is not registered.');
    }

    if (existedUser.isVerified) {
      throw new BadRequestException('Email has been verified.');
    }

    existedUser.isVerified = true;
    await this.userRepository.save(existedUser);
  }

  async verificationEmail(email: string): Promise<User> {
    const existedUser = await this.userRepository.findOne({
      where: { email },
    });

    if (!existedUser) {
      throw new BadRequestException('Email is not registered.');
    }

    if (existedUser.isVerified) {
      throw new BadRequestException('Email has been verified.');
    }

    return existedUser;
  }

  async login(loginUserDto: LoginUserDto): Promise<any> {
    const user = await this.userRepository.findOne({
      where: { email: loginUserDto.email },
    });
    if (!user) {
      throw new HttpException('Email is not exist', HttpStatus.UNAUTHORIZED);
    }
    const checkPass = bcrypt.compareSync(loginUserDto.password, user.password);
    if (!checkPass) {
      throw new HttpException(
        'Password is not correct',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return this.generateToken({ id: user.id, email: user.email });
  }

  async refreshToken(refreshToken: string): Promise<any> {
    try {
      const verify = await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get<string>('SECRET'),
      });

      const checkExist = await this.userRepository.findOneBy({
        email: verify.email,
        refreshToken,
      });
      if (checkExist) {
        return this.generateToken({ id: verify.id, email: verify.email });
      } else {
        throw new HttpException(
          'Refresh token is not valid',
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (error) {
      throw new HttpException(
        'Refresh token is not valid',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private async verifyEmailToken(token: string): Promise<string> {
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get<string>('SECRET'),
      });

      if (typeof payload === 'object' && 'email' in payload) {
        return payload.email;
      }

      throw new BadRequestException('Invalid token.');
    } catch (error) {
      if (error?.name === 'TokenExpiredError') {
        throw new BadRequestException('Email verification token expired.');
      }
      throw new BadRequestException('Bad verification token.');
    }
  }

  private async generateToken(payload: {
    id: number;
    email: string;
  }): Promise<any> {
    const accessToken = await this.jwtService.signAsync(payload);
    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('SECRET'),
      expiresIn: this.configService.get<string>('EXP_IN_REFRESH_TOKEN'),
    });
    await this.userRepository.update(
      { email: payload.email },
      { refreshToken: refreshToken },
    );
    return { accessToken, refreshToken };
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const hash = await bcrypt.hash(password, salt);

    return hash;
  }
}
