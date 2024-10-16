// 1
function greet (name) {
console.log ('Hello Busa');}
greet ();


// 2 
function multiply (num1, num2) {
return num1 * num2;}
console.log (multiply(5,5));


// 3
const sumFunctionExpression = function (num1, num2) {
return num1 + num2;}
console.log (sumFunctionExpression(4, 5)); 


// 4
const arrowFun = (a, b) => a + b; 
console.log (arrowFun(4, 5)); 


// 5 
function calculate (num1, num2) {
return num1 + num2;}

const sum = (num1, num2) => num1 + num2;
console.log (calculate(5, 5, sum)); 
