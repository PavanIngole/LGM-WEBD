//this functions clear all the values 
function clearScreen() {
    document.getElementById("result").value = "";
}

// this functions displays all the value 

function display(value) {
    document.getElementById("result").value += value;
}

//this function evaluates expression and return result

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}