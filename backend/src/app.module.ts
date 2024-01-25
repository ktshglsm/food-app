import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { dataSourceOptions } from 'db/data-source';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { OrderController } from './order/order.controller';
import { OrderModule } from './order/order.module';
import { FoodController } from './food/food.controller';
import { FoodModule } from './food/food.module';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';
import { ReviewModule } from './review/review.module';
import { PaymentService } from './payment/payment.service';
import { PaymentController } from './payment/payment.controller';
import { PaymentModule } from './payment/payment.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    OrderModule,
    FoodModule,
    CategoryModule,
    ReviewModule,
    PaymentModule,
    AddressModule,
  ],
  controllers: [AppController, OrderController, FoodController, CategoryController, PaymentController],
  providers: [AppService, CategoryService, PaymentService],
})
export class AppModule {}
