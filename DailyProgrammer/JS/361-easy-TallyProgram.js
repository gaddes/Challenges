// 1- write function that accepts STRING as input, STRING as output
// 2-

// create an array for each letter
// loop through input string one letter at a time, counting the number of times each character is used
// add this value to an
// for each letter, output array.count

// Count number of occurences of character in string - https://stackoverflow.com/questions/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript

function countLetters(letter) {

  return ("this is foo bar".match(/a/g)||[]).length
}

let tallyHo = (inputString) => {

  const countA = (inputString.match(/a/g)||[]).length - (inputString.match(/A/g)||[]).length;
  const countB = (inputString.match(/b/g)||[]).length - (inputString.match(/B/g)||[]).length;
  const countC = (inputString.match(/c/g)||[]).length - (inputString.match(/C/g)||[]).length;
  const countD = (inputString.match(/d/g)||[]).length - (inputString.match(/D/g)||[]).length;
  const countE = (inputString.match(/e/g)||[]).length - (inputString.match(/E/g)||[]).length;
  let outputString = `a:${countA}, b:${countB}, c:${countC}, d:${countD}, e:${countE}`;

  console.log('countA = ', countA);

  return outputString;
}

tallyHo("aaaAA");

("this is foo bar".match(/o/g)||[]).length

var stringOne = "this is a string";

stringOne.match()
// Note: It took me a little while to realize what ||[] was doing but this answer is great! For anyone else scratching their heads, match() returns null if no matches are found and ||[] will return a 0 length array if the match() returns null, meaning length() will return 0 instead of producing a type error. – Nathan Sep 20 '12 at 6:27
