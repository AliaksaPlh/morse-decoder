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
    for(let i = 0; i < expr.length; i += 10) { // разделила на символы
        if (expr[i] === '*') { // вычисляю пробел ли
            decodedLetters = decodedLetters + ' '; // вывожу морз код символу - конечный результат в фазе главного цикла
        } else { // если не пробел
            letterInBinary = `${+expr.slice(i, i + 10)}`; // в строку без нулей
            letterInMorse = ''; 
            for (let iPair = 0; iPair < letterInBinary.length; iPair += 2) { // цикл для выведения морза кода
                if (letterInBinary.slice(iPair, iPair + 2) === '11') { // для dash
                    letterInMorse = letterInMorse + '-';
                } else if (letterInBinary.slice(iPair, iPair + 2) === '10') { // для Point
                    letterInMorse = letterInMorse + '.';
                }
            }
            decodedLetters = decodedLetters + MORSE_TABLE[letterInMorse]; // вывожу морз код символу - конечный результат в фазе главного цикла
        }
    }
    return decodedLetters;
}

module.exports = {
    decode
}