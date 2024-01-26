import { Test, TestingModule } from '@nestjs/testing';
import { DiscountCodeController } from './discount-code.controller';

describe('DiscountCodeController', () => {
  let controller: DiscountCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscountCodeController],
    }).compile();

    controller = module.get<DiscountCodeController>(DiscountCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
