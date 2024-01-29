import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { Food } from './entities/food.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateFoodDto } from './dto/update-food.dto';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Food) private foodRepository: Repository<Food>,
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
  ) {}

  async getById(id: number): Promise<Food> {
    return await this.foodRepository.findOneBy({ id });
  }
  async getAllInRestaurant(restaurantId: number): Promise<Food[]> {
    return this.foodRepository.findBy({
      restaurant: { id: restaurantId },
    });
  }
  async create(
    createFoodDto: CreateFoodDto,
    restaurantId: number,
  ): Promise<Food> {
    const restaurant = await this.restaurantRepository.findOneBy({
      id: restaurantId,
    });
    return await this.foodRepository.save({
      ...createFoodDto,
      createdBy: restaurantId,
      updatedBy: restaurantId,
      restaurant,
    });
  }
  async update(
    id: number,
    updateFoodDto: UpdateFoodDto,
  ): Promise<UpdateResult> {
    return await this.foodRepository.update(id, updateFoodDto);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.foodRepository.delete(id);
  }
}
