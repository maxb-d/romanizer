import { Body, Controller, Post, UseGuards, Sse, MessageEvent } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { ConversionService } from './conversion.service';
import { interval, Observable, map } from 'rxjs';

interface MessageEventConv {
    data: string | object
}

@Controller('conversion')
export class ConversionController {
    constructor(private readonly conversionService: ConversionService) {}

    private confortably_numb: number;

    @UseGuards(JwtAuthGuard)
    @Post()
    convert(
        @Body('decNumber') decNumber: number
    ): any {
        this.confortably_numb = decNumber;
        return this.conversionService.getConversion(decNumber);
    }

    @Sse('event')
    sendEvent(): Observable<MessageEventConv> {
        // Event every second
        return interval(1000).pipe(map((_) => ({data: this.conversionService.getConversion(this.confortably_numb).convo === 'undefinedundefinedundefined'? "" : this.conversionService.getConversion(this.confortably_numb).convo } as MessageEventConv)));
  }
}
