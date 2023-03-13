import { Injectable } from "@nestjs/common";

import { Conversion } from "./conversion.model";

import { int_standard, decimal_standard, StandardNum } from '../utils/algoConstants'

@Injectable()
export class ConversionService {
    private conversion: Conversion = {convo: ""};

    getConversion(decNumber: number) {
        this.conversion.convo = this.computeConversion(decNumber)
        return this.conversion;
    }

    computeConversion(origine_num: number): string {
        if (origine_num < 0 || origine_num > 100) {
            throw new Error('Error: Input number must be in range 0 - 100');
        }
    
        let integer_split: number = Math.floor(origine_num) 
        let decimal_split: number = origine_num - integer_split
        
        // Convert integer part
        let integer_roman: string = this.integer_to_roman(integer_split)
    
        // Convert decimal part
        let decimal_found: number = 0
        if (decimal_split !== 0) {
            decimal_found = decimal_standard.reduce((acc: number, curr: StandardNum) => {
                return (Math.abs(curr.num - decimal_split) < Math.abs(acc - decimal_split) ? curr.num : acc);
            }, 0)
            let decimal_roman = decimal_standard.find(item => item.num === decimal_found)?.rom;
            return integer_roman + decimal_roman
        }
    
        return integer_roman
    }

    integer_to_roman(integer_split: number): string {
        // Convert integer part
        let integer_roman: string = int_standard.reduce((acc: string, val: StandardNum) => {
            if(integer_split >= val.num) {
                while (integer_split >= val.num){
                acc += val.rom
                integer_split -= val.num
                }
            }
    
            return acc
        }, '')
        if (integer_roman === '') integer_roman = 'N'
    
        return integer_roman
    }
}