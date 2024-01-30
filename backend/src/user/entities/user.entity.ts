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
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { UserRoles } from '../enums/roles.enum';
import { UserStatus } from '../enums/status.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ unique: true })
  phone: string;

  @Column({ default: UserRoles.USER })
  role: UserRoles;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ nullable: true, default: null })
  refreshToken: string;

  @Column({ nullable: true, default: null })
  avatar: string;

  @Column({ default: UserStatus.ACTIVE })
  status: UserStatus;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'createdBy' })
  createdBy: User;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'updatedBy' })
  updatedBy: User;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
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
