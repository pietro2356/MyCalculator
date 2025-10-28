import OperationError from "./errors/OperationError.js";
import performOperation from "./math/performOperation.js";
import Log from "./log/Log.js";


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

        /**
         * In questo caso controlliamo se il risultato è un'istanza di OperationError
         *
         * Controllare direttamente OperationError ci permette di gestire tutti gli errori derivati
         *  senza dover fare un controllo per ogni tipo di errore specifico DivisionByZeroError, InvalidOperationError, ecc.
         *
         *  @see README.md - Gestione degli errori con classi personalizzate
         */
        if (res instanceof OperationError){
            result.innerText = "Error: " + res.message;
        }else{
            result.innerText = "Result: " + res;

            /**
                Istanziando un nuovo Log, passo i parametri necessari per la creazione del log.
                In particolare passo anche i riferimenti HTML ai campi di input val1 e val2,
                in modo che il metodo fnLoad possa funzionare correttamente.

                @see Log.js - Classe Log
             */
            let myLog = new Log(a, b, operation, val1, val2);

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