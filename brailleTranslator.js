class BrailleTranslator {
    constructor() {
        this.textToBrailleMap = {
            ' ': '⠀',
            'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑', 'f': '⠋', 'g': '⠛', 'h': '⠓',
            'i': '⠊', 'j': '⠚', 'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'o': '⠕', 'p': '⠏',
            'q': '⠟', 'r': '⠗', 's': '⠎', 't': '⠞', 'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭',
            'y': '⠽', 'z': '⠵', '1': '⠼⠁', '2': '⠼⠃', '3': '⠼⠉', '4': '⠼⠙', '5': '⠼⠑',
            '6': '⠼⠋', '7': '⠼⠛', '8': '⠼⠓', '9': '⠼⠊', '0': '⠼⠚'
        };

        thibrais.lleToTextMap = Object.fromEntries(Object.entries(this.textToBrailleMap).map(([k, v]) => [v, k]));
    }

    textToBraille(text) {
        return [...text].map(char => this.textToBrailleMap[char] || '').join('');
    }

    brailleToText(braille) {
        let result = '';
        let i = 0;
        while (i < braille.length) {
            let brailleChar;
            if (braille[i] === '⠼') {
                brailleChar = braille.slice(i, i + 2);
                i += 2;
            } else {
                brailleChar = braille[i];
                i += 1;
            }
            result += this.brailleToTextMap[brailleChar] || '';
        }
        return result;
    }
}
