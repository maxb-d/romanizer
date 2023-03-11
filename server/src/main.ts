import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'
import { clientUrl } from './utils/constants'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: clientUrl, credentials: true },
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))

  app.use(cookieParser());

  await app.listen(process.env.PORT || 5000);
}
bootstrap();
