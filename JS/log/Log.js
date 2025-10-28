import HTMLRefValueError from "../errors/HTMLRefValueError.js";

/**
 * Classe per memorizzare un'operazione eseguita
 * @param {number} val1 - primo valore
 * @param {number} val2 - secondo valore
 * @param {string} operation - operazione eseguita
 * @example
 * let log = new Log(5, 3, "+");
 * log.fnLoad(); // carica i valori 5 e 3 nei campi di input
 * @see calc.js - Utilizzo della classe Log
 *
 * @param {HTMLInputElement} [_val1HTML] - riferimento HTML al campo di input del primo valore
 * @param {HTMLInputElement} [_val2HTML] - riferimento HTML al campo di input del secondo valore
 */
export default class Log {
    constructor(a, b, operation, _val1HTML, _val2HTML) {
        this.val1 = a;
        this.val2 = b;
        this.operation = operation;

        if (_val1HTML !== undefined){
            this.val1HTML = _val1HTML;
        }

        if (_val2HTML !== undefined){
            this.val2HTML = _val2HTML;
        }
    }

    /**
     * Carica i valori memorizzati nei campi di ingresso
     * @throws {HTMLRefValueError} Se i riferimenti HTML non sono definiti
     */
    fnLoad = () => {
        if (this.val2HTML === undefined || this.val1HTML === undefined){
            throw new HTMLRefValueError("fnLoad");
        }

        console.table({val1: this.val1, val2: this.val2});
        this.val1HTML.value = this.val1;
        this.val2HTML.value = this.val2;
    }
}