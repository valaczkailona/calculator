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
        return "error";
    } else {
        return (firstNum / secNum);
    }
};

function operate(operator, firstNum, secNum) {
    firstNum = Number(firstNum);
    secNum = Number(secNum);

   switch(operator) {
        case "+":
            return add(firstNum, secNum);
        case "-":
            return subtract(firstNum, secNum);
        case "*":
            return multiply(firstNum, secNum);
        case "/":
            return divide(firstNum, secNum);
            }
};

const onDisplay = document.querySelector('.display');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');

const clear = document.querySelector('.clear');

const equal = document.querySelector('.equal');

clear.addEventListener("click", () => {
  firstNum = "";
  secNum = "";
  operator = "";
  onDisplay.textContent = "";
});




numbers.forEach((number) => 
    number.addEventListener("click", (e) => {
        let num = e.target;
        console.log(e.target.textContent);
        onDisplay.textContent += num.textContent;
    }));

operators.forEach((operator) => 
    operator.addEventListener("click", (e) => {
        console.log(e.target.textContent);
        let currentOp = e.target; 
        onDisplay.textContent += currentOp.textContent;
        
    })
);

equal.addEventListener("click", () => {

    console.log(onDisplay.textContent);
    const equation = onDisplay.textContent;
    let splitEquation =[];

    if (equation.includes("+")) {
       splitEquation = equation.split("+");
        onDisplay.textContent = operate("+", splitEquation[0], splitEquation[1]);
    } else if (equation.includes("-")) {
        splitEquation = equation.split("-");
        onDisplay.textContent = operate("-", splitEquation[0], splitEquation[1]);
    } else if (equation.includes("*")) {
        splitEquation = equation.split("*");
        onDisplay.textContent = operate("*", splitEquation[0], splitEquation[1]);
    } else if (equation.includes("/")) {
        splitEquation = equation.split("/");
        onDisplay.textContent = operate("/", splitEquation[0], splitEquation[1]);
    }
    
    return onDisplay.textContent;
});
firstNum = onDisplay.textContent;
   



