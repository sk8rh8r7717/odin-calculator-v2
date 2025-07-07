function add(num1, num2) {
    return (Number(num1) + Number(num2))
}

function subtract(num1, num2) {
    return (num1 - num2)
}

function multiply (num1, num2) {
    return (num2 * num1)
}

function divide (num1, num2) {
    if (num2 == 0) {
        return 'Denominator cannot be zero'
    }
    else {
        return (num1 / num2)
    }
}


function operate(num1, num2, operation) {
    if (operation == '+') {
        return add(num1, num2)
    }
    else if (operation == '-') {
        return subtract(num1, num2)
    }
    else if (operation == '*') {
        return multiply(num1, num2)
    }
    else if (operation == '/') {
        return divide(num1, num2)
    }
}

let operand1 = -1
let operator = ''
let operand2 = -1

displayContent = ''
numberList = document.querySelectorAll('.number')
clearButton = document.querySelector('#clear')
equalsButton = document.querySelector('#equals')
operatorList = document.querySelectorAll('.operator')

//Event Listeners

//Updates display according to numbers pressed
numberList.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        displayContent = displayContent + numberButton.innerText;
        document.querySelector('#display').innerText = displayContent 
        console.log(operand1 + ' ' + operator + ' ' + operand2)
    })
});

//Clears operands, operators, and display when AC is pressed
clearButton.addEventListener('click', () => {
    operand1 = 0
    operator = ''
    operand2 = 0
    displayContent = ''
    document.querySelector('#display').innerText = displayContent
    console.log(operand1 + ' ' + operator + ' ' + operand2)
})

operatorList.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        if (operator == '') {
            operator = operatorButton.innerText
            if (displayContent != '') { 
                operand1 = displayContent
            }
            displayContent = ''
        }
        else {
            operand2 = displayContent
            displayContent = operate(operand1, operand2, operator)
            operand1 = displayContent
            document.querySelector('#display').innerText = displayContent
            displayContent = ''
            operator = operatorButton.innerText
        }
        console.log(operand1 + ' ' + operator + ' ' + operand2)
    })
})


equalsButton.addEventListener('click', () => {
    if (operator != '') {
        operand2 = displayContent
        displayContent = operate(operand1, operand2, operator)
        document.querySelector('#display').innerText = displayContent
        operand1 = displayContent
        displayContent = ''
        operator = ''
    }
    console.log(operand1 + ' ' + operator + ' ' + operand2)
})