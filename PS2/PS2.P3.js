//Use ES6 arrow notation to create function that returns the cube value of its input
const cubeVal = (x) => { return Math.pow(x, 3) };

//Example provided by problem set
var hwTest = [1,2,3,4,5,6,7];

//Use 1-line map command to cube the elements of the array
console.log(hwTest.map(cubeVal))
