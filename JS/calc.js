let allBtn = document.querySelectorAll("button");

let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");

let result = document.getElementById("result");

let memory = document.getElementById("memory");

allBtn.forEach((btn) => {
    console.log(btn);

    btn.addEventListener("click", (event) => {
        console.log(event.target.attributes);
        console.log(val1);

        let a = parseFloat(val1.value);
        let b = parseFloat(val2.value);

        if (isNaN(a) || isNaN(b)) {
            result.innerText = "Error: Inserisci numeri validi";
            return;
        }

        let operation = event.target.attributes["operation"].value;

        let res = performOperation(a, b, operation);

        if (res instanceof Error){
            result.innerText = "Error: " + res.message;
        }else{
            result.innerText = "Result: " + res;

            let myLog = new Log(a, b, operation);

            let btnLoad = document.createElement("button");
            btnLoad.innerText = "LOAD";
            btnLoad.addEventListener("click", myLog.fnLoad);

            let logLine = document.createElement("li");
            logLine.innerText = `Eseguito ${myLog.val1} ${myLog.operation} ${myLog.val2}`;
            logLine.append(btnLoad);

            memory.appendChild(logLine);
        }
        console.log(res);
    });
});

/**
 * Esegue l'operazione tra a e b
 * @param a {number}
 * @param b {number}
 * @param operation {string} L'operazione da eseguire: + - / *
 * @returns {number|Error}
 */
function performOperation(a, b, operation){
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
            return Error("Operazione non valida");
    }
}

/**
 * Classe per memorizzare un'operazione eseguita
 */
class Log {
    constructor(a, b, operation){
        this.val1 = a;
        this.val2 = b;
        this.operation = operation;
    }

    /**
     * Carica i valori memorizzati nei campi di ingresso
     */
    fnLoad = () => {
        console.table({val1: this.val1, val2: this.val2});
        val1.value = this.val1;
        val2.value = this.val2;
    }
}

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
 * @returns {number|Error} - quoziente tra i due numeri o errore se il divisore è zero
 */
function divisione(a,b){
    if (b === 0){
        return Error("Divisione per zero non permessa");
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