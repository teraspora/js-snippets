// Morse code functions etc.
// 2020-06-01
// John Lynch

const morse_bss =['01', '11000', '11010', '1100', '10', '10010', '1110', '10000', '100', '10111', '1101', '10100', '111', '110', '1111', '10110', '11101', '1010', '1000', '11', '1001', '10001', '1011', '11001', '11011', '11100'];

const morse_dd = morse_bss.map(x => x.split(``)).map(dd => dd.map(d => ~~d ? ` ⚫` : `—`).join(``));
