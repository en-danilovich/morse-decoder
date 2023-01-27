const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let decodedStr = '';
    let sliceStep = 10;

    for (let i = 0; i < expr.length; i += sliceStep) {
        let encodedLetter = expr.slice(i, i + sliceStep);

        encodedLetter[0] === '*'
            ? decodedStr += ' '
            : decodedStr += MORSE_TABLE[convertToMorseCode(encodedLetter)]
    }

    return decodedStr;
}

function convertToMorseCode(encodedLetter) {
    let letterMorseCode = '';
    encodedLetter = parseInt(encodedLetter).toString();
    for (let i = 0; i < encodedLetter.length; i += 2) {
        letterMorseCode += parseInt(encodedLetter.slice(i, i + 2)) == 10 ? '.' : '-';
    }

    return letterMorseCode;
}

module.exports = {
    decode
}