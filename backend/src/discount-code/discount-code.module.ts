import { Module } from '@nestjs/common';
import { DiscountCodeController } from './discount-code.controller';
import { DiscountCodeService } from './discount-code.service';

@Module({
  controllers: [DiscountCodeController],
  providers: [DiscountCodeService]
})
export class DiscountCodeModule {}
