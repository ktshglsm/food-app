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
import { PaymentService } from './payment/payment.service';
import { PaymentController } from './payment/payment.controller';
import { PaymentModule } from './payment/payment.module';
import { AddressModule } from './address/address.module';
import { ImageController } from './image/image.controller';
import { ImageModule } from './image/image.module';
import { RestaurantService } from './restaurant/restaurant.service';
import { RestaurantController } from './restaurant/restaurant.controller';
import { RestaurantModule } from './restaurant/restaurant.module';
import { CartModule } from './cart/cart.module';
import { OrderDetailService } from './order-detail/order-detail.service';
import { OrderDetailController } from './order-detail/order-detail.controller';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { DiscountCodeModule } from './discount-code/discount-code.module';
import { FeedbackService } from './feedback/feedback.service';
import { FeedbackController } from './feedback/feedback.controller';
import { FeedbackModule } from './feedback/feedback.module';
import { FoodService } from './food/food.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    OrderModule,
    FoodModule,
    CategoryModule,
    PaymentModule,
    AddressModule,
    ImageModule,
    RestaurantModule,
    CartModule,
    OrderDetailModule,
    DiscountCodeModule,
    FeedbackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
