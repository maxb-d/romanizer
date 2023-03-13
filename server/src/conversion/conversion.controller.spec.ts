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

    it('should return II', () => {
      expect(conversionController.convert(2)).toStrictEqual({convo: 'II'});
    })

    it('should return IIS', () => {
      expect(conversionController.convert(2.5)).toStrictEqual({convo: 'IIS'});
    })

    it('should return C', () => {
      expect(conversionController.convert(100)).toStrictEqual({convo: 'C'});
    })

    it('should return N', () => {
      expect(conversionController.convert(0)).toStrictEqual({convo: 'N'});
    })

    it('should return XXXVI⁙', () => {
      expect(conversionController.convert(36.418)).toStrictEqual({convo: 'XXXVI⁙'});
    })
});
