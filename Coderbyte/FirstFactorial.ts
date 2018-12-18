// Calculate the factorial of input parameter
// https://coderbyte.com/editor/guest:First%20Factorial:JavaScript

function FirstFactorial(num : number) {
    let count : number = num;
    while (count > 1) {
      count -= 1;
      num = num * count;
    }
    return num;
}

let inputValue : number = 8;
let answer : number = FirstFactorial(inputValue);
console.log(`the factorial of ${inputValue} = ${answer}`);