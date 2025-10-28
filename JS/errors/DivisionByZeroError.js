import OperationError from "./OperationError.js";

/**
 * Classe per l'errore di divisione per zero
 * deriva da OperationError
 * @example
 * throw new DivisionByZeroError();
 * @see README.md - Gestione degli errori con classi personalizzate
 */
export default class DivisionByZeroError extends OperationError {
    constructor() {
        super("Divisione per zero non permessa");
        this.name = "DivisionByZeroError";
    }
}