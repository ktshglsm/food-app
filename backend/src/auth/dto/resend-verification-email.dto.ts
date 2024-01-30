import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class ResendVerificationEmailDto {
  @ApiProperty()
  @IsEmail({}, { message: 'Please enter correct email' })
  email: string;
}
