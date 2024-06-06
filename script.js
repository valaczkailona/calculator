let firstNum;
let secNum;
let operator;


function add(firstNum, secNum) {
	return (firstNum + secNum);
};

function subtract(firstNum, secNum) {
	return (firstNum - secNum);
};

function multiply(firstNum, secNum) {
  return (firstNum * secNum);
};

function divide(firstNum, secNum) {
    if (secNum === 0) {
        return;
    } else {
        return (firstNum / secNum);
    }
};

function operate(operator, firstNum, secNum) {

    if (operator == "+") {
        add(firstNum, secNum);
    } else if (operator == "-") {
        subtract(firstNum, secNum);
    } else if (operator == "*") {
        multiply(firstNum, secNum);
    } else if (operator == "/") {
        divide(firstNum, secNum);
    }
};