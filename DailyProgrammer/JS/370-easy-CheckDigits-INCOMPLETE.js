// https://www.reddit.com/r/dailyprogrammer/comments/a72sdj/20181217_challenge_370_easy_upc_check_digits/

// FIXME: this was left incomplete after realising we should've broken down the input number into an array, as this would allow us to more easily add the leading zeroes.
// Alternatively, there appears to be a handy built-in function padStart() that does exactly what we need (although this is kinda cheating...)

const upc = (num) => {

  // Change to string
  const inputString = num.toString();

  let oddSum = 0;
  let evenSum = 0;
  let totalSum = 0;
  let remainder = 0;
  let checkDigit = 0;

  // Add leading zeroes (if num.length < 11)
  if (inputString.length < 11) {
    for (i = 0; i < (11 - inputString.length); i++) {
      inputString[0]
    }
  }

  for (i = 0; i < inputString.length; i = i + 2) {
    const int = parseInt(inputString[i]);
    oddSum = oddSum + int;
  }

  for (i = 1; i < inputString.length; i = i + 2) {
    const int = parseInt(inputString[i]);
    evenSum = evenSum + int;
  }

  totalSum = (oddSum * 3) + evenSum;
  remainder = totalSum % 10;

  if (remainder === 0) {
    checkDigit = remainder;
  } else {
    checkDigit = 10 - remainder;
  }

  console.log(oddSum);
  console.log(evenSum);
  console.log(totalSum);

  return `The check digit is ${checkDigit}`;
}

console.log(upc(4210000526));
// console.log(upc(3600029145));
