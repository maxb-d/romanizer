import { Body, Controller, Get } from '@nestjs/common';
import { ConversionService } from './conversion.service';

@Controller('conversion')
export class ConversionController {
    constructor(private readonly conversionService: ConversionService) {}

    @Get()
    convert(
        @Body('decNumber') decNumber: number
    ): any {
        return this.conversionService.getConversion(decNumber);
    }
}
