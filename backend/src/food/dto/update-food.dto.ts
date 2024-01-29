import { ApiProperty } from '@nestjs/swagger';

export class UpdateFoodDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  categoryId: number;
}
