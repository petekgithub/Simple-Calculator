
var firstOperand = 0,secondOperand = 0;
var operator = "";

function numberClicked(v) {
     document.getElementById('txt').value += v; 
}

function calculate() {
    secondOperand = Number(document.getElementById('txt').value);
    if(operator == "+"){ 
        firstOperand += secondOperand;
    }
    if (operator == "-"){ 
        firstOperand -= secondOperand;
    }
    if (operator == "*"){ 
        firstOperand *= secondOperand;
    }
    if(operator == "/"){ 
        firstOperand /= secondOperand;
    } 
   
    document.getElementById('txt').value = firstOperand;
}

function plus() {
    firstOperand = Number(document.getElementById('txt').value);
    document.getElementById('txt').value = "";
    operator = "+";
}

function minus() {
    firstOperand = Number(document.getElementById('txt').value);
    document.getElementById('txt').value = "";
    operator = "-";
}

function multiply() {
    firstOperand = Number(document.getElementById('txt').value);
    document.getElementById('txt').value = "";
    operator = "*";
}

function divide() {
    firstOperand = Number(document.getElementById('txt').value);
    document.getElementById('txt').value = "";
    operator = "/";
}

function clearClearall() {
    document.getElementById('txt').value = "";
    firstOperand = 0;
    secondOperand = 0;
    operator= "";
}
    