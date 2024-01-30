import { Body, Controller, Post, Req } from '@nestjs/common';
import { RegisterUserDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { User } from 'src/user/entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { VerificationTokenDto } from './dto/verification-token.dto';
import { Request } from 'express';
import { MailService } from 'src/mail/mail.service';
import { ResendVerificationEmailDto } from './dto/resend-verification-email.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly mailService: MailService,
  ) {}

  @Post('register')
  @ApiResponse({ status: 201, description: 'Register successfully!' })
  @ApiResponse({ status: 400, description: 'Email has been verified!' })
  @ApiResponse({
    status: 401,
    description: 'Email has been registered but not authenticated!',
  })
  async register(
    @Req() req: Request,
    @Body() registerUserDto: RegisterUserDto,
  ): Promise<string> {
    const newUser = await this.authService.register(registerUserDto);
    const url = `${req.protocol}://${req.get('Host')}`;
    await this.mailService.sendVerificationMail(newUser, url);

    return 'Register successfully!';
  }

  @Post('verify')
  @ApiResponse({ status: 201, description: 'Verification successfully!' })
  @ApiResponse({ status: 400, description: 'Verification failed!' })
  async verify(
    @Body() verificationTokenDto: VerificationTokenDto,
  ): Promise<string> {
    await this.authService.verify(verificationTokenDto);

    return 'Verification Successfully!';
  }

  @Post('resend-verification-email')
  @ApiResponse({
    status: 201,
    description: 'Resend verification email successfully!',
  })
  @ApiResponse({ status: 400, description: 'Resend email failed!' })
  async resendVerificationEmail(
    @Req() req: Request,
    @Body() resendVerificationEmailDto: ResendVerificationEmailDto,
  ): Promise<string> {
    const existedUser = await this.authService.verificationEmail(
      resendVerificationEmailDto.email,
    );
    const url = `${req.protocol}://${req.get('Host')}`;
    await this.mailService.sendVerificationMail(existedUser, url);

    return 'Resend verification email successfully!';
  }

  @Post('login')
  @ApiResponse({ status: 201, description: 'Login successfully!' })
  @ApiResponse({ status: 401, description: 'Login fail!' })
  login(@Body() loginUserDto: LoginUserDto): Promise<User> {
    return this.authService.login(loginUserDto);
  }

  @Post('refresh-token')
  refreshToken(@Body() { refreshToken }): Promise<any> {
    return this.authService.refreshToken(refreshToken);
  }
}
