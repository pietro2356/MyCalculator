let result = 0;

// NodeListOf<HTMLButtonElement>
let allBtn = document.querySelectorAll("button");

let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");

allBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        console.log(event.target);
    });

    btn.addEventListener("click", operate);
});

/**
 * Esegue l'operazione selezionata
 * @param event Evento di click sul bottone
 */
function operate(event){
    let operator = event.target.id;
    let a = parseFloat(val1.value);
    let b = parseFloat(val2.value);

    result = performOperation(operator, a, b);

    if (result instanceof Error) {
        console.error(result.message);
        document.getElementById("result").innerText = "Error: " + result.message;
        return;
    }

    if (!isNaN(result)) {
        result = result.toFixed(4);
    }

    console.log("Result: " + result);
    document.getElementById("result").innerText = "Result: " + result;
}


/**
 * Esegue l'operazione in base all'operatore
 * @param operator - operatore selezionato
 * @param a - primo operando
 * @param b - secondo operando
 * @returns {Number|Error} - risultato dell'operazione o errore se operazione non valida
 */
function performOperation(operator, a, b){
    switch(operator){
        case "btn-op-sum":
            return sum(a,b);
        case "btn-op-sub":
            return sub(a,b);
        case "btn-op-div":
            return div(a,b);
        case "btn-op-mul":
            return mol(a,b);
        default:
            return Error("Operazione non valida");
    }
}


function sum(a,b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function div(a,b){
    return a / b;
}

function mol(a,b){
    return a * b;
}