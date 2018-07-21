// From Udemy WebDev2018 - Section 12, Lecture 135: JavaScript Logic

/*
 *This function works by creating two copies of the same array ('arr') and comparing the first value in this array with every other value in the same array.
 *
 * e.g. if the array has 3No. items:
 * compare 1 -> 1, then 1 -> 2, then 1 -> 3,
 * then compare 2 -> 1, then 2 -> 2, then 2 -> 3,
 * then compare 3 -> 1, then 3 -> 2, then 3 -> 3.
 *
 * Note: because it makes no sense to compare 1 -> 1, this function checks and disregards the answer where this is the case (only return where i !== i2).
 * This ensures nothing is returned when a value is checked against itself.
 */

const answer = (arr, target) => {
  return arr.filter((e, i) => {
    console.log("--- begin FILTER loop ---");
    console.log("e", e);
    console.log("i", i);
    return arr.find((e2, i2) => { // if this function evaluates as TRUE, the value of 'e' will be appended to 'answer'
      console.log("--- begin FIND loop ---");
      console.log("e2", e2);
      console.log("i2", i2);
      if (i === i2) {
        console.log("FAIL (nothing returned) - we are checking against the same value (i === i2)");
      } else if (e2 !== target - e) {
        console.log("FAIL (nothing returned) - these numbers DO NOT sum to equal the target (e2 !== target - e)");
      } else {
        console.log(`SUCCESS - this function evaluates as TRUE and therefore the value of 'e' = ${e} has been appended to 'answer'`);
      }
      return e2 === target - e && i !== i2
    });
  });
};

console.log('in:', [1, 2, 3], 4);
console.log('out:', answer([1, 2, 3], 4));
