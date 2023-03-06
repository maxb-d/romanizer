import { ConversionService } from './conversion.service'
import { ConversionController } from './conversion.controller'
import { Module } from '@nestjs/common'

@Module({
    controllers: [ConversionController],
    providers: [ConversionService],
})
export class ControlerModule {}