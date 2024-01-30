import { ApiProperty } from '@nestjs/swagger';
import { RestaurantStatus } from '../enums/status.enum';

export class UpdateRestaurantDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  status: RestaurantStatus;

  @ApiProperty()
  openingHours: string;

  @ApiProperty()
  closingHours: string;
}
