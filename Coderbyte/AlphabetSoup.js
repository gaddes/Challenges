function AlphabetSoup(str) {
  let answer = "";

  // For each letter in str, check if charcode is greater than previous letter - str.charAt(0)
  // If so, add to end of string.
  // Else, check letter before

  // Add first letter in str to answer
  answer += str.charAt(0);
  console.log(answer);

  if ("b".charAt(0) > "a".charAt(0)) {
    console.log(true);
  } else {
    console.log(false);
  }

  for (let i = 1; i < str.length; i++) {
    console.log(str.length);
    console.log(str.charAt(i));
    console.log(answer);
    console.log(answer.length);
    
    if (str.charAt(i) > answer.charAt(i - 1)) {
      answer += str.charAt(i);
    } else {
      // Check every previous letter in answer string
      for (let j = answer.length; j >= 0; j--) {
        if (str.charAt(i) > answer.charAt(j - 1)) {
          // insert char at this position (i.e. after j-1)
          answer = answer.substr(0, i - 1) + str.charAt(i) + answer.substr(i - 1);
          console.log(answer.substr(0, j));
        } else {
          // do nothing, continue for loop
        }
      }
    }
  }

  return answer;
}

console.log(AlphabetSoup("coderbyte")); // bcdeeorty
// console.log(AlphabetSoup("hooplah")); // ahhloop
