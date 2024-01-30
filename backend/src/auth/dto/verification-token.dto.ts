import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class VerificationTokenDto {
  @ApiProperty()
  @IsString()
  token: string;
}
