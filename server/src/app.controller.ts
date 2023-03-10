import { Controller, Get, Sse } from '@nestjs/common';
import { interval, Observable, map } from 'rxjs';
import { AppService } from './app.service';

interface MessageEventDepr {
  data: string | object
}
interface MessageEvent {
  data: string | object
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Sse('event')
  sendEvent(): Observable<MessageEvent> {
    // Returns a number 1000 from last one every second
    return interval(1000).pipe(
      map((num: number) => ({
        data: ' ' + num + num
      }))
    );
  }
}
