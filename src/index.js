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
    function decodeWord(word) {
        if (word === '**********') return ' ';

        let arrOfLetters = [...word.matchAll(/.{2}/g)].flat(1);

        return arrOfLetters.reduce( (word, letter) => {
            switch (letter) {
                case '10': return word + '.';
                case '11': return word + '-';

                default: return word;
            }
        }, '')
    }

    let arrOfSourceWords = [...expr.matchAll(/.{10}/g)].flat(1);

    let arrOfMorseLetters = arrOfSourceWords.map( word => decodeWord(word) );
    let arrOfLetters = arrOfMorseLetters.map( word => word !== ' ' ? MORSE_TABLE[word] : ' ');

    return arrOfLetters.join('');
}

module.exports = {
    decode
};