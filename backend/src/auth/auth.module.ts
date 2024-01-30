import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { MailService } from 'src/mail/mail.service';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Restaurant]),
    JwtModule.register({
      global: true,
      secret: '123456',
      signOptions: { expiresIn: '1h' },
    }),
    ConfigModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, MailService],
})
export class AuthModule {}
