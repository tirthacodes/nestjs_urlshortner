import { Test, TestingModule } from '@nestjs/testing';
import { ExpandController } from './expand.controller';

describe('ExpandController', () => {
  let controller: ExpandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpandController],
    }).compile();

    controller = module.get<ExpandController>(ExpandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
