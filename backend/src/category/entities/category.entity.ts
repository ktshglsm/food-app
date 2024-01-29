import { DiscountCode } from 'src/discount-code/entities/discount-code.entity';
import { Food } from 'src/food/entities/food.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  createdBy: number;

  @Column()
  updatedBy: number;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Food, (food) => food.category)
  foods: Food[];

  @OneToMany(() => DiscountCode, (discountCode) => discountCode.category)
  discountCodes: DiscountCode[];
}
