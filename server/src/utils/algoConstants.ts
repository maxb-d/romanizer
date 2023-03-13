export interface StandardNum {
    num: number,
    rom: string
}

export const decimal_standard: StandardNum[] = [
    { num: .083, rom: '·' },
    { num: .167, rom:  ':' },
    { num: .250, rom:  '∴' },
    { num: .333, rom:  '∷' },
    { num: .417, rom:  '⁙' },
    { num: .500, rom:  'S' },
    { num: .583, rom:  'S·' },
    { num: .667, rom:  'S:' },
    { num: .750, rom:  'S∴' },
    { num: .833, rom:  'S∷' },
    { num: .917, rom:  'S⁙' },
]

export const int_standard: StandardNum[] = [
    { num:100, rom: 'C' },
    { num:90, rom: 'XC' },
    { num:50, rom: 'L' },
    { num:40, rom: 'XL' },
    { num:10, rom: 'X' },
    { num:9, rom: 'IX' },
    { num:5, rom: 'V' },
    { num:4, rom: 'IV' },
    { num: 1, rom: 'I' },
]