import OperationError from "./OperationError.js";

/**
 * Classe per l'errore di operazione non valida
 * deriva da OperationError
 * @example
 * throw new InvalidOperationError();
 * @see README.md - Gestione degli errori con classi personalizzate
 */
export default class InvalidOperationError extends OperationError {
    constructor() {
        super("Operazione non valida");
        this.name = "InvalidOperationError";
    }
}