import { Order } from 'src/order/entities/order.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'double' })
  amount: number;

  @Column()
  paymentMethod: string;

  @Column()
  status: string;

  @Column()
  paymentDate: Date;

  @Column()
  createdBy: number;

  @Column()
  updatedBy: number;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.payments)
  user: User;

  @OneToOne(() => Order, (order) => order.payment)
  order: Order;
}
