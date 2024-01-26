import { Category } from 'src/category/entities/category.entity';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class DiscountCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column({ type: 'double' })
  discountAmount: number;

  @Column({ type: 'double' })
  minimumAmount: number;

  @Column()
  discountType: string;

  @Column({ type: 'datetime' })
  startTime: Date;

  @Column({ type: 'datetime' })
  endTime: Date;

  @Column()
  createdBy: string;

  @Column()
  updatedBy: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Category, (category) => category.discountCodes)
  category: Category;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.discountCodes)
  restaurant: Restaurant;
}
