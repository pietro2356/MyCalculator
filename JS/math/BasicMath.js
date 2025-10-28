import DivisionByZeroError from "../errors/DivisionByZeroError.js";

/**
 * Somma due numeri
 * @param a {number} - primo addendo
 * @param b {number} - secondo addendo
 * @returns {number} - somma dei due addendi
 */
function somma(a,b){
    return a + b;
}

/**
 * Sottrae due numeri
 * @param a {number} - minuendo
 * @param b {number} - sottraendo
 * @returns {number} - differenza tra i due numeri
 */
function sottrazione(a,b){
    return a - b;
}

/**
 * Divide due numeri
 * @param a {number} - dividendo
 * @param b {number} - divisore
 * @returns {number|DivisionByZeroError} - quoziente tra i due numeri o errore se il divisore è zero
 */
function divisione(a,b){
    if (b === 0){
        return new DivisionByZeroError();
    }
    return a / b;
}

/**
 * Moltiplica due numeri
 * @param a {number} - moltiplicando
 * @param b {number} - moltiplicatore
 * @returns {number} - prodotto tra i due numeri
 */
function moltiplicazione(a,b){
    return a * b;
}

export {somma, sottrazione, divisione, moltiplicazione};