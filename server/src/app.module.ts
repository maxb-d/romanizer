import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConversionController } from './conversion/conversion.controller';
import { ConversionService } from './conversion/conversion.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    AuthModule, 
    PrismaModule, 
    UsersModule,
  ],
  controllers: [
    AppController, 
    ConversionController
  ],
  providers: [
    AppService, 
    ConversionService
  ],
})
export class AppModule {}
