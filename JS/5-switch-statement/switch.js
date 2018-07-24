// 1 - ask user to choose their favourite number
// 2 - use switch statement on their favourite number
// 3 - if the number they chose is 3 - celebration!

let magicNumber = (num) => {
  switch (num) {
    case 1:
      console.log(`You have chosen ${num}... this is NOT the magic number, please try again!`);
      break;
    case 2:
      console.log(`You have chosen ${num}... this is NOT the magic number, please try again!`);
      break;
    case 3:
      console.log(`Congratulations!!! ${num} is the magic number!!!`);
      break;
    case 4:
      console.log(`You have chosen ${num}... this is NOT the magic number, please try again!`);
      break;
    case 5:
      console.log(`You have chosen ${num}... this is NOT the magic number, please try again!`);
      break;
    default:
      console.log("Please choose an integer between 1 and 5!");
  }
}
