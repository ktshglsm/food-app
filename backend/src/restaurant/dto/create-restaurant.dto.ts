import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { RestaurantStatus } from '../enums/status.enum';

export class CreateRestaurantDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  status: RestaurantStatus;

  @ApiProperty()
  @IsNotEmpty()
  openingHours: string;

  @ApiProperty()
  @IsNotEmpty()
  closingHours: string;
}
