import { Food } from 'src/food/entities/food.entity';
import { Order } from 'src/order/entities/order.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column({ type: 'double' })
  subtotalAmount: number;

  @Column({ type: 'double' })
  deliveryAmount: number;

  @Column({ type: 'double' })
  discount: number;

  @Column()
  createdBy: string;

  @Column()
  updatedBy: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Order, (order) => order.orderDetails)
  order: Order;

  @ManyToOne(() => Food, (food) => food.orderDetails)
  food: Food;
}
