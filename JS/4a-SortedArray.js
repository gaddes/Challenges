// From Udemy WebDev2018 - Section 12, Lecture 135: JavaScript Logic

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const sortedArray = array.sort((a, b) => a - b); // This syntax is required to sort an array of NUMBERS. By default, the sort function deals with STRINGS -> this is no good because, for example, the value 391 will be returned before 5.
console.log("sortedArray", sortedArray);

tempArray = [];
finalArray = [];

sortedArray.filter((value, i, array) => {
  tempArray.push(value); // append current value to tempArray
  if (array[i+1] === tempArray[0]) {
    // if the NEXT value equals the CURRENT value, do nothing and continue looping through sortedArray
  } else {
    // if the CURRENT value does NOT match the values in tempArray, then tempArray has served its purpose and it's time to PUSH the contents to finalArray
    if (tempArray.length > 1) {
      finalArray.push(tempArray); // if length > 1, push entire array
    } else {
      finalArray.push(tempArray[0]); // if length = 1, push single value only
    }
    tempArray = []; // clear tempArray
  }
});
console.log('finalArray', finalArray);
