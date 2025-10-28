/**
 * Classe base per gli errori delle operazioni
 * deriva da Error
 *
 * @example
 * throw new OperationError("Messaggio di errore");
 *
 * @see README.md - Gestione degli errori con classi personalizzate
 */
export default class OperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "OperationError";
    }
}