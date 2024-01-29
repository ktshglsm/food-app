import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FoodService } from './food.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateFoodDto } from './dto/create-food.dto';
import { Food } from './entities/food.entity';
import { RestaurantGuard } from 'src/restaurant/restaurant.guard';
import { UpdateFoodDto } from './dto/update-food.dto';
@ApiBearerAuth()
@ApiTags('Food')
@Controller('food')
export class FoodController {
  constructor(private foodService: FoodService) {}

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.foodService.getById(Number(id));
  }

  @Get('restaurant/:restaurantId')
  getAllInRestaurant(@Param('restaurantId') restaurantId: string) {
    return this.foodService.getAllInRestaurant(Number(restaurantId));
  }

  @Post()
  @UseGuards(AuthGuard, RestaurantGuard)
  create(@Req() req: any, @Body() createFoodDto: CreateFoodDto): Promise<Food> {
    return this.foodService.create(
      createFoodDto,
      Number(req.restaurant_data.id),
    );
  }

  @UseGuards(AuthGuard, RestaurantGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateFoodDto: UpdateFoodDto) {
    return this.foodService.update(Number(id), updateFoodDto);
  }

  @UseGuards(AuthGuard, RestaurantGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.foodService.delete(Number(id));
  }
}
