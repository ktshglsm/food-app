import { Address } from 'src/address/entities/address.entity';
import { Cart } from 'src/cart/entities/cart.entity';
import { Feedback } from 'src/feedback/entities/feedback.entity';
import { Order } from 'src/order/entities/order.entity';
import { Payment } from 'src/payment/entities/payment.entity';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  OneToOne,
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

  @Column()
  createdBy: string;

  @Column()
  updatedBy: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Restaurant, (restaurant) => restaurant.user)
  restaurant: Restaurant;

  @OneToMany(() => Cart, (cart) => cart.user)
  carts: Cart[];

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @OneToMany(() => Feedback, (feedback) => feedback.user)
  feedbacks: Feedback[];

  @OneToMany(() => Payment, (payment) => payment.user)
  payments: Payment[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
