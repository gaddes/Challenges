// Calculate the factorial of input parameter
// https://coderbyte.com/editor/guest:First%20Factorial:JavaScript
function FirstFactorial(num) {
    var count = num;
    while (count > 1) {
        count -= 1;
        num = num * count;
    }
    return num;
}
var inputValue = 8;
var answer = FirstFactorial(inputValue);
console.log("the factorial of " + inputValue + " = " + answer);
