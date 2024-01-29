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
} from 'typeorm';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @Column({ type: 'time' })
  openingHours: string;

  @Column({ type: 'time' })
  closingHours: string;

  @Column()
  createdBy: number;

  @Column()
  updatedBy: number;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @OneToMany(() => DiscountCode, (discountCode) => discountCode.restaurant)
  discountCodes: DiscountCode[];

  @OneToMany(() => Food, (food) => food.restaurant)
  foods: Food[];

  @OneToOne(() => User, (user) => user.restaurant)
  @JoinColumn()
  user: User;
}
