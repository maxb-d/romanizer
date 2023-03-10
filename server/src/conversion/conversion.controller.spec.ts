import { Test, TestingModule } from '@nestjs/testing';
import { ConversionController } from './conversion.controller';
import { ConversionService } from './conversion.service';

describe('ConversionController', () => {
  let conversionController: ConversionController;

  beforeEach(async () => {
    const conversion: TestingModule = await Test.createTestingModule({
      controllers: [ConversionController],
      providers: [ConversionService],
    }).compile();

    conversionController = conversion.get<ConversionController>(ConversionController);
  });

  it('conversion', () => {
    it('should return 2', () => {
      expect(conversionController.convert(2)).toBe(2);
    })
  });
});
