import { DiscountCode } from 'src/discount-code/entities/discount-code.entity';
import { Food } from 'src/food/entities/food.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';
import { RestaurantStatus } from '../enums/status.enum';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'Restaurant' })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: RestaurantStatus.ACTIVATE })
  status: RestaurantStatus;

  @Column({ nullable: true, type: 'time' })
  openingHours: string;

  @Column({ nullable: true, type: 'time' })
  closingHours: string;

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

  @OneToMany(() => DiscountCode, (discountCode) => discountCode.restaurant)
  discountCodes: DiscountCode[];

  @OneToMany(() => Food, (food) => food.restaurant)
  foods: Food[];

  @OneToOne(() => User, (user) => user.restaurant)
  @JoinColumn()
  user: User;
}
