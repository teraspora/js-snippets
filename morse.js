// Morse code functions etc.
// 2020-06-01
// John Lynch

const morse_bss = ['01', '1000', '1010', '100', '0', '0010', '110', '0000', '00', '0111', '101', '0100', '11', '10', '111', '0110', '1101', '010', '000', '1', '001', '0001', '011', '1001', '1011', '1100'];

const morse_bssx = ['101', '11000', '11010', '1100', '10', '10010', '1110', '10000', '100', '10111', '1101', '10100', '111', '110', '1111', '10110', '11101', '1010', '1000', '11', '1001', '10001', '1011', '11001', '11011', '11100'];

const morse_dd = morse_bssx.map(x => x.split(``)).map(dd => dd.map(d => ~~d ? ` ⚫` : `—`).join(``));
undefined
morse_dd
    (26)[" ⚫— ⚫", " ⚫ ⚫———", " ⚫ ⚫— ⚫—", " ⚫ ⚫——", " ⚫—", " ⚫—— ⚫—", " ⚫ ⚫ ⚫—", " ⚫————", " ⚫——", " ⚫— ⚫ ⚫ ⚫", " ⚫ ⚫— ⚫", " ⚫— ⚫——", " ⚫ ⚫ ⚫", " ⚫ ⚫—", " ⚫ ⚫ ⚫ ⚫", " ⚫— ⚫ ⚫—", " ⚫ ⚫ ⚫— ⚫", " ⚫— ⚫—", " ⚫———", " ⚫ ⚫", " ⚫—— ⚫", " ⚫——— ⚫", " ⚫— ⚫ ⚫", " ⚫ ⚫—— ⚫", " ⚫ ⚫— ⚫ ⚫", " ⚫ ⚫ ⚫——"]

const morse_intsx = morse_bssx.map(s => parseInt(s, 2));
undefined
morse_intsx
    (26)[5, 24, 26, 12, 2, 18, 14, 16, 4, 23, 13, 20, 7, 6, 15, 22, 29, 10, 8, 3, 9, 17, 11, 25, 27, 28]
