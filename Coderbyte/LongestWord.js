const LongestWord = (sentence) => {

  // Time tracking - START
  let t0 = performance.now();

  // Split input sentence into array of words
  const words = sentence.split(" ");
  // Array containing strings containing upper/lowercase letters only
  let newArray = [];

  // Create new array of words without special chars
  for (let i = 0; i < words.length; i++) {
    // String purged of special chars
    let tempString = "";
    // Split word into individual chars
    const chars = words[i].split('');
    // Check character is letter (upper or lower case)
    for (let j = 0; j < chars.length; j++) {
      if ((chars[j].charCodeAt(0) > 96 && chars[j].charCodeAt(0) < 123) || (chars[j].charCodeAt(0) > 64 && chars[j].charCodeAt(0) < 91)) {
        // Append char to tempString
        tempString += chars[j];
      } // Else do nothing (discard special character)
    }
    // Push new string into array
    newArray.push(tempString);
    // Reset value of tempString
    tempString = ""
  }

  // Hold index of largest word in array
  let indexOfMaxLetters;
  // Hold number of letters in largest word
  let numberOfLetters = 0;

  // Check longest word in array
  for (let i = 0; i < newArray.length; i++) {
    // If this word has more letters than all previous words in the array, update numberOfLetters
    if (newArray[i].length > numberOfLetters) {
      numberOfLetters = newArray[i].length;
      // Hold index of word in array so we can retrieve it!
      indexOfMaxLetters = i;
    }
  }

  // Time tracking - END
  let t1 = performance.now();
  console.log(`LongestWord took ${t1 - t0} milliseconds to run.`);

  return `The longest word is ${newArray[indexOfMaxLetters]}, it has ${numberOfLetters} characters. If there's more than one 'longest word', this function returns the first!`;
}

// Enable Quokka extension in VS Code to see live results!
console.log(LongestWord("this is a very looooong string")); // looooong
console.log(LongestWord("fun&!! time"));// time
console.log(LongestWord("I love dogs")); // love

// 
// 
// The function below is the solution from CoderByte, this is much quicker and more efficient.
// 
// 

function LongestWord_fast(sen) {

  // Time tracking - START
  let t0 = performance.now();

  // we use the regex match function which searches the string for the
  // pattern and returns an array of strings it finds
  // in our case the pattern we define below returns words with
  // only the characters a through z and 0 through 9, stripping away punctuation
  // e.g. "hello$% ##all" becomes [hello, all]
  var arr = sen.match(/[a-z0-9]+/gi);

  // the array sort function takes a function as a parameter
  // which is used to compare each element in the array to the
  // next element in the array
  var sorted = arr.sort(function(a, b) {
    return b.length - a.length;
  });

  // Time tracking - END
  let t1 = performance.now();
  console.log(`LongestWord_fast took ${t1 - t0} milliseconds to run.`);

  // this array now contains all the words in the original
  // string but in order from longest to shortest length
  // so we simply return the first element);
  return sorted[0];
}

console.log(LongestWord_fast("the $$$longest# word is coderbyte"));

const performanceTest = "Qui laboris££3@ ei%%%us,.,mo::d e:::sse ir^^^&*ure an@£$@@£$im am£&£$@%£!et c@£$@ulpa reprehenderit excepteur ea. Deserunt eu dolore cupidatat elit consectetur. Mollit cupidatat occaecat magna nostrud enim aliquip cillum ea velit aliqua labore commodo. Deserunt Lorem ullamco labore excepteur deserunt do mollit irure cillum officia sit aute laboris. Elit esse minim cupidatat eu incididunt cillum consectetur sunt commodo quis quis consectetur officia. Qui laboris££3@ ei%%%us,.,mo::d e:::sse ir^^^&*ure an@£$@@£$im am£&£$@%£!et c@£$@ulpa reprehenderit excepteur ea. Deserunt eu dolore cupidatat elit consectetur. Mollit cupidatat occaecat magna nostrud enim aliquip cillum ea velit aliqua labore commodo. Deserunt Lorem ullamco labore excepteur deserunt do mollit irure cillum officia sit aute laboris. Elit esse minim cupidatat eu incididunt cillum consectetur sunt commodo quis quis consectetur officia. Qui laboris££3@ ei%%%us,.,mo::d e:::sse ir^^^&*ure an@£$@@£$im am£&£$@%£!et c@£$@ulpa reprehenderit excepteur ea. Deserunt eu dolore cupidatat elit consectetur. Mollit cupidatat occaecat magna nostrud enim aliquip cillum ea velit aliqua labore commodo. Deserunt Lorem ullamco labore excepteur deserunt do mollit irure cillum officia sit aute laboris. Elit esse minim cupidatat eu incididunt cillum consectetur sunt commodo quis quis consectetur officia. Qui laboris££3@ ei%%%us,.,mo::d e:::sse ir^^^&*ure an@£$@@£$im am£&£$@%£!et c@£$@ulpa reprehenderit excepteur ea. Deserunt eu dolore cupidatat elit consectetur. Mollit cupidatat occaecat magna nostrud enim aliquip cillum ea velit aliqua labore commodo. Deserunt Lorem ullamco labore excepteur deserunt do mollit irure cillum officia sit aute laboris. Elit esse minim cupidatat eu incididunt cillum consectetur sunt commodo quis quis consectetur officia. Qui laboris££3@ ei%%%us,.,mo::d e:::sse ir^^^&*ure an@£$@@£$im am£&£$@%£!et c@£$@ulpa reprehenderit excepteur ea. Deserunt eu dolore cupidatat elit consectetur. Mollit cupidatat occaecat magna nostrud enim aliquip cillum ea velit aliqua labore commodo. Deserunt Lorem ullamco labore excepteur deserunt do mollit irure cillum officia sit aute laboris. Elit esse minim cupidatat eu incididunt cillum consectetur sunt commodo quis quis consectetur officia. Qui laboris££3@ ei%%%us,.,mo::d e:::sse ir^^^&*ure an@£$@@£$im am£&£$@%£!et c@£$@ulpa reprehenderit excepteur ea. Deserunt eu dolore cupidatat elit consectetur. Mollit cupidatat occaecat magna nostrud enim aliquip cillum ea velit aliqua labore commodo. Deserunt Lorem ullamco labore excepteur deserunt do mollit irure cillum officia sit aute laboris. Elit esse minim cupidatat eu incididunt cillum consectetur sunt commodo quis quis consectetur officia. Qui laboris££3@ ei%%%us,.,mo::d e:::sse ir^^^&*ure an@£$@@£$im am£&£$@%£!et c@£$@ulpa reprehenderit excepteur ea. Deserunt eu dolore cupidatat elit consectetur. Mollit cupidatat occaecat magna nostrud enim aliquip cillum ea velit aliqua labore commodo. Deserunt Lorem ullamco labore excepteur deserunt do mollit irure cillum officia sit aute laboris. Elit esse minim cupidatat eu incididunt cillum consectetur sunt commodo quis quis consectetur officia. Qui laboris££3@ ei%%%us,.,mo::d e:::sse ir^^^&*ure an@£$@@£$im am£&£$@%£!et c@£$@ulpa reprehenderit excepteur ea. Deserunt eu dolore cupidatat elit consectetur. Mollit cupidatat occaecat magna nostrud enim aliquip cillum ea velit aliqua labore commodo. Deserunt Lorem ullamco labore excepteur deserunt do mollit irure cillum officia sit aute laboris. Elit esse minim cupidatat eu incididunt cillum consectetur sunt commodo quis quis consectetur officia. Qui laboris££3@ ei%%%us,.,mo::d e:::sse ir^^^&*ure an@£$@@£$im am£&£$@%£!et c@£$@ulpa reprehenderit excepteur ea. Deserunt eu dolore cupidatat elit consectetur. Mollit cupidatat occaecat magna nostrud enim aliquip cillum ea velit aliqua labore commodo. Deserunt Lorem ullamco labore excepteur deserunt do mollit irure cillum officia sit aute laboris. Elit esse minim cupidatat eu incididunt cillum consectetur sunt commodo quis quis consectetur officia. Qui laboris££3@ ei%%%us,.,mo::d e:::sse ir^^^&*ure an@£$@@£$im am£&£$@%£!et c@£$@ulpa reprehenderit excepteur ea. Deserunt eu dolore cupidatat elit consectetur. Mollit cupidatat occaecat magna nostrud enim aliquip cillum ea velit aliqua labore commodo. Deserunt Lorem ullamco labore excepteur deserunt do mollit irure cillum officia sit aute laboris. Elit esse minim cupidatat eu incididunt cillum consectetur sunt commodo quis quis consectetur officia. Qui laboris££3@ ei%%%us,.,mo::d e:::sse ir^^^&*ure an@£$@@£$im am£&£$@%£!et c@£$@ulpa reprehenderit excepteur ea. Deserunt eu dolore cupidatat elit consectetur. Mollit cupidatat occaecat magna nostrud enim aliquip cillum ea velit aliqua labore commodo. Deserunt Lorem ullamco labore excepteur deserunt do mollit irure cillum officia sit aute laboris. Elit esse minim cupidatat eu incididunt cillum consectetur sunt commodo quis quis consectetur officia. Qui laboris££3@ ei%%%us,.,mo::d e:::sse ir^^^&*ure an@£$@@£$im am£&£$@%£!et c@£$@ulpa reprehenderit excepteur ea. Deserunt eu dolore cupidatat elit consectetur. Mollit cupidatat occaecat magna nostrud enim aliquip cillum ea velit aliqua labore commodo. Deserunt Lorem ullamco labore excepteur deserunt do mollit irure cillum officia sit aute laboris. Elit esse minim cupidatat eu incididunt cillum consectetur sunt commodo quis quis consectetur officia.";

console.log(LongestWord(performanceTest));
console.log(LongestWord_fast(performanceTest));