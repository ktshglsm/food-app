import { Food } from 'src/food/entities/food.entity';
import { Payment } from 'src/payment/entities/payment.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 1 })
  Quantity: number;

  @Column({ type: 'double' })
  SubtotalAmount: number;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.ordersUser)
  user: User;

  @ManyToOne(() => User, (user) => user.ordersRestaurant)
  restaurant: User;

  @ManyToOne(() => Payment, (payment) => payment.orders)
  payment: Payment;

  @ManyToOne(() => Food, (food) => food.orders)
  food: Food;
}
