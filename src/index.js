const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letterInBinary;
    let letterInMorse;
    let decodedLetters = '';
    for(let i = 0; i < expr.length; i += 10) {
        if (expr[i] === '*') {
            decodedLetters = decodedLetters + ' ';
        } else {
            letterInBinary = `${+expr.slice(i, i + 10)}`;
            letterInMorse = '';
            for (let iPair = 0; iPair < letterInBinary.length; iPair += 2) {
                if (letterInBinary.slice(iPair, iPair + 2) === '11') {
                    letterInMorse = letterInMorse + '-';
                } else if (letterInBinary.slice(iPair, iPair + 2) === '10') {
                    letterInMorse = letterInMorse + '.';
                }
            }
            decodedLetters = decodedLetters + MORSE_TABLE[letterInMorse];
        }
    }
    return decodedLetters;
}

module.exports = {
    decode
}