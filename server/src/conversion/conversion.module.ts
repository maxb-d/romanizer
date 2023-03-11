import { ConversionService } from './conversion.service'
import { ConversionController } from './conversion.controller'
import { Module } from '@nestjs/common'
import { JwtStrategy } from '../auth/jwt.strategy'

@Module({
    controllers: [ConversionController],
    providers: [ConversionService, JwtStrategy],
})
export class ConversionModule {}