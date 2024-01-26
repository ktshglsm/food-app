import { Test, TestingModule } from '@nestjs/testing';
import { DiscountCodeService } from './discount-code.service';

describe('DiscountCodeService', () => {
  let service: DiscountCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscountCodeService],
    }).compile();

    service = module.get<DiscountCodeService>(DiscountCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
