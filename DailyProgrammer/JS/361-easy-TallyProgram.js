function countLetter(inputString, letter) {
  const reLower = new RegExp(letter.toLowerCase(), 'g');
  const reUpper = new RegExp(letter.toUpperCase(), 'g');
  const finalCount = (inputString.match(reLower)||[]).length - (inputString.match(reUpper)||[]).length; // lowercase - uppercase

  return finalCount;
}

let tallyHo = (inputString) => {
  const countA = countLetter(inputString, "a");
  const countB = countLetter(inputString, "b");
  const countC = countLetter(inputString, "c");
  const countD = countLetter(inputString, "d");
  const countE = countLetter(inputString, "e");

  const outputString = `a:${countA}, b:${countB}, c:${countC}, d:${countD}, e:${countE}`;

  return outputString;
}

tallyHo("dbbaCEDbdAacCEAadcB");

// NOTE: this does not return output in order of highest -> lowest. To do this, we could create a key:value pair for each letter, and return a string showing the KEY (a, b, c...) and the associated VALUE (1, 2, 3...) in order.

/*
 * Notes below!
 */

// Count number of occurences of character in string - https://stackoverflow.com/questions/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript

// Create new RegEx - https://stackoverflow.com/questions/3172985/javascript-use-variable-in-string-match

// match() function - "It took me a little while to realize what ||[] was doing but this answer is great! For anyone else scratching their heads, match() returns null if no matches are found and ||[] will return a 0 length array if the match() returns null, meaning length() will return 0 instead of producing a type error." – Nathan Sep 20 '12 at 6:27
