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
import { AuthGuard } from 'src/auth/auth.guard';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantGuard } from './restaurant.guard';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@ApiBearerAuth()
@ApiTags('Restaurant')
@Controller('restaurant')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.restaurantService.getById(Number(id));
  }

  @Get('')
  getAllRestaurant() {
    return this.restaurantService.getAllRestaurant();
  }

  @Post()
  @UseGuards(AuthGuard)
  create(
    @Req() req: any,
    @Body() createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantService.create(
      createRestaurantDto,
      Number(req.user_data.id),
    );
  }

  @UseGuards(AuthGuard, RestaurantGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateRestaurantDto: UpdateRestaurantDto,
  ) {
    return this.restaurantService.update(Number(id), updateRestaurantDto);
  }

  @UseGuards(AuthGuard, RestaurantGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.restaurantService.delete(Number(id));
  }
}
