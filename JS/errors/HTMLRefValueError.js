/**
 * Classe di errore personalizzata per gestire i casi in cui i riferimenti agli elementi HTML sono mancanti o non validi.
 * Estende la classe di errore standard di JavaScript.
 * @example
 * throw new HTMLRefValueError("Dettagli sull'errore");
 * @see README.md - Gestione degli errori con classi personalizzate
 */
export default class HTMLRefValueError extends Error {
    constructor(message) {
        super("Riferimenti HTMLElement mancanti nella creazione dell'istanza: " + message);
        this.name = "HTMLRefValueError";
    }
}