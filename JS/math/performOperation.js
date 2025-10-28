import InvalidOperationError from "./errors/InvalidOperationError.js";
import {divisione, moltiplicazione, somma, sottrazione} from "./math/BasicMath.js";

/**
 * Esegue l'operazione tra a e b
 * @param a {number}
 * @param b {number}
 * @param operation {string} L'operazione da eseguire: + - / *
 * @returns {number|OperationError} - il risultato dell'operazione o un errore se l'operazione non è valida
 * @example
 * performOperation(5, 3, "+") // ritorna 8
 * performOperation(5, 0, "/") // ritorna DivisionByZeroError (OperationError)
 * performOperation(5, 3, "%") // ritorna InvalidOperationError (OperationError)
 */
export default function performOperation(a, b, operation){
    switch (operation) {
        case "+":
            return somma(a,b);
        case "-":
            return sottrazione(a,b);
        case "/":
            return divisione(a,b);
        case "*":
            return moltiplicazione(a,b);
        default:
            return new InvalidOperationError();
    }
}