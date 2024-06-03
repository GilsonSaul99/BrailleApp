class AppController {
    constructor() {
        this.translator = new BrailleTranslator();
        this.initEventListeners();
    }

    initEventListeners() {
        document.getElementById('translate-to-braille').addEventListener('click', () => this.translateToBraille());
        document.getElementById('translate-to-text').addEventListener('click', () => this.translateToText());
    }

    translateToBraille() {
        const input = document.getElementById('input-text').value.toLowerCase();
        const result = this.translator.textToBraille(input);
        document.getElementById('output-text').textContent = result;
    }

    translateToText() {
        const input = document.getElementById('input-text').value;
        const result = this.translator.brailleToText(input);
        document.getElementById('output-text').textContent = result;
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => new AppController());
