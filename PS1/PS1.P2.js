//P2.js
const evaluate = s => {
  switch(s.charAt(1)) {
    case "+":
      return (left, right) => parseInt(expression[0]) + parseInt(expression[2])
    case "-":
      return (left, right) => parseInt(expression[0]) - parseInt(expression[2])
    case "*":
      return (left, right) => parseInt(expression[0]) * parseInt(expression[2])
    case "%":
      return (left, right) => parseInt(expression[0]) % parseInt(expression[2])
    default:
      break;
  }
}

const expression = '8+3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)
