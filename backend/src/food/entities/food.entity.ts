import { Cart } from 'src/cart/entities/cart.entity';
import { Category } from 'src/category/entities/category.entity';
import { Feedback } from 'src/feedback/entities/feedback.entity';
import { OrderDetail } from 'src/order-detail/entities/order-detail.entity';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'double' })
  price: number;

  @Column({ type: 'double' })
  discount: number;

  @Column()
  description: string;

  @Column()
  status: string;

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

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.foods)
  restaurant: Restaurant;

  @ManyToOne(() => Category, (category) => category.foods)
  category: Category;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.food)
  orderDetails: OrderDetail[];

  @OneToMany(() => Cart, (cart) => cart.food)
  carts: Cart[];

  @OneToMany(() => Feedback, (feedback) => feedback.food)
  feedbacks: Feedback[];
}
