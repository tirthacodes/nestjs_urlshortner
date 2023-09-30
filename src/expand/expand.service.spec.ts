import { Test, TestingModule } from '@nestjs/testing';
import { ExpandService } from './expand.service';

describe('ExpandService', () => {
  let service: ExpandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpandService],
    }).compile();

    service = module.get<ExpandService>(ExpandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
