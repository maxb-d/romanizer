import { Injectable, NotFoundException } from "@nestjs/common";

import { Conversion } from "./conversion.model";

@Injectable()
export class ConversionService {
    private conversion: Conversion = {convo: ""};

    getConversion(decNumber: number) {
        this.computeConversion(decNumber)
        return this.conversion;
    }

    computeConversion(decNumber: number): void {
        if (decNumber < 1 || decNumber > 3999) {
            throw new Error('Error: Input integer limited to 1 through 3,999');
        }
        
        const numerals = [
            ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'], // 1-9
            ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'], // 10-90
            ['C'] // 1000-3000
        ];
        
        // TODO: Could expand to support fractions, simply rounding for now
        const digits = Math.round(decNumber).toString().split('');
        let position = (digits.length - 1);
        
        this.conversion.convo = digits.reduce((roman, digit) => {
            if (digit !== '0') {
            roman += numerals[position][parseInt(digit) - 1];
            }
        
            position -= 1;
            
            
            return roman;
        }, '');
    }
}
