import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { ConversionService } from './conversion.service';

@Controller('conversion')
export class ConversionController {
    constructor(private readonly conversionService: ConversionService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    convert(
        @Body('decNumber') decNumber: number
    ): any {
        return this.conversionService.getConversion(decNumber);
    }
}
