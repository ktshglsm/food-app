import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { ConfigModule } from '@nestjs/config';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, User]), ConfigModule],
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class RestaurantModule {}
