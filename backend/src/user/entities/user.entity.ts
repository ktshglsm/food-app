import { Address } from 'src/address/entities/address.entity';
import { Food } from 'src/food/entities/food.entity';
import { Order } from 'src/order/entities/order.entity';
import { Payment } from 'src/payment/entities/payment.entity';
import { Review } from 'src/review/entities/review.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  role: number;

  @Column({ nullable: true, default: null })
  refreshToken: string;

  @Column({ nullable: true, default: null })
  avatar: string;

  @Column({ default: 1 })
  status: number;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Food, (food) => food.restaurant)
  foods: Food[];

  @OneToMany(() => Order, (order) => order.user)
  ordersUser: Order[];

  @OneToMany(() => Order, (order) => order.restaurant)
  ordersRestaurant: Order[];

  @OneToMany(() => Review, (review) => review.user)
  reviewsUser: Review[];

  @OneToMany(() => Review, (review) => review.restaurant)
  reviewsRestaurant: Review[];

  @OneToMany(() => Payment, (payment) => payment.user)
  payments: Payment[];

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];
}
