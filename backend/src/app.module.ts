import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './order/order.module';
import { FoodModule } from './food/food.module';
import { CategoryModule } from './category/category.module';
import { PaymentModule } from './payment/payment.module';
import { AddressModule } from './address/address.module';
import { ImageModule } from './image/image.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { CartModule } from './cart/cart.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { DiscountCodeModule } from './discount-code/discount-code.module';
import { FeedbackModule } from './feedback/feedback.module';
import { MailModule } from './mail/mail.module';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ConfigModule.forRoot({
      cache: true,
    }),
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
    MailModule,
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT || 6379,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
