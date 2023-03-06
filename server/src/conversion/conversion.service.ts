import { Injectable, NotFoundException } from "@nestjs/common";

import { Conversion } from "./conversion.model";

@Injectable()
export class ConversionService {
    private conversion: Conversion = {convo: 2};

    getConversion(decNumber: number) {
        this.computeConversion(decNumber)
        return this.conversion;
    }

    computeConversion(decNumber: number) {
        this.conversion.convo = decNumber
    }
}