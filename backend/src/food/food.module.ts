import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { Food } from './entities/food.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodController } from './food.controller';
import { ConfigModule } from '@nestjs/config';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Food, Restaurant]), ConfigModule],
  controllers: [FoodController],
  providers: [FoodService],
})
export class FoodModule {}
