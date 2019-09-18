//P2.js
const evaluate = s => {
  switch(s.charAt(1)) {
    case "+":
      //console.log("+")
      return (left, right) => left + right
    case "-":
      return (left, right) => left - right
    case "*":
      return (left, right) => left * right
    case "%":
      return (left, right) => left % right
    default:
      break;
  }
}

const expression = '8+3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)
