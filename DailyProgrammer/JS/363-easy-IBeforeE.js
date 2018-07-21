const wordCheck = function(word) {
  if (word.indexOf("ie") >= 0) { // check that word contains string "ie"
    const locationOfString = word.indexOf("ie");
    if ((word.charAt(locationOfString - 1) === "c")) {
      console.log(`I before E except after C is FALSE for this word!`);
      return false;
    } else {
      console.log(`I before E except after C is TRUE for this word!`);
      return true;
    };
  } else {
    console.log(`This word does not contain the letters "ie" together.`);
  }
}

wordCheck("friend");
