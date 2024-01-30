import {
  BadGatewayException,
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
  ) {}

  async getById(id: number): Promise<Restaurant> {
    const restaurant = await this.restaurantRepository.findOneBy({ id });
    if (!restaurant) {
      throw new NotFoundException();
    }
    return restaurant;
  }
  async getAllRestaurant(): Promise<Restaurant[]> {
    return this.restaurantRepository.find();
  }
  async create(
    createRestaurantDto: CreateRestaurantDto,
    userId: number,
  ): Promise<Restaurant> {
    try {
      const user = await this.userRepository.findOneBy({
        id: userId,
      });
      const restaurant = await this.restaurantRepository.findOneBy({
        user: { id: user.id },
      });
      if (restaurant) {
        throw new NotFoundException('Restaurant exist');
      }
      return await this.restaurantRepository.save({
        ...createRestaurantDto,
        createdBy: user,
        updatedBy: user,
        user,
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }
  async update(
    id: number,
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<UpdateResult> {
    try {
      return await this.restaurantRepository.update(id, updateRestaurantDto);
    } catch (error) {
      throw new BadGatewayException();
    }
  }

  async delete(id: number): Promise<DeleteResult> {
    try {
      return await this.restaurantRepository.delete(id);
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
