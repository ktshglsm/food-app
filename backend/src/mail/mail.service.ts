import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private readonly mailerService: MailerService,
  ) {}

  async sendVerificationMail(user: User, url: string): Promise<string> {
    const verificationToken = await this.generateEmailToken({
      email: user.email,
    });

    const verificationLink = `${url}/auth/verify/${verificationToken}`;

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Account verification link',
      template: './verify-email',
      context: {
        username: `${user.firstName} ${user.lastName}`,
        verificationLink,
      },
    });

    return 'Register successfully!';
  }

  private async generateEmailToken(payload: {
    email: string;
  }): Promise<string> {
    const token = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('SECRET'),
      expiresIn: this.configService.get<string>('MAIL_EXPIRES'),
    });

    return token;
  }
}
