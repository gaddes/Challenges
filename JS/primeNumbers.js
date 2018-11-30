let prime = (input) => {
  // This will hold every prime in sequence from 2 to input
  let arrayOfPrimes = [];

  // Check whether each number from 2 to input is prime. If it is, add to arrayOfPrimes so that we can count 'em up!
  for (potentialPrime = 2; potentialPrime < input + 1; potentialPrime++) {
    // If this value remains zero, the number we're currently checking is prime
    let count = 0;

    // Check if there's a remainder when the current prime number is divided by every number before it (starting at 2)
    for (i = 2; i < potentialPrime; i++) { 
      // If there is no remainder, the number is NOT prime --> increment count by one
      if (potentialPrime % i === 0) {
        count = count + 1;
      };
    };

    // If count is still 0 after checking the remainder of every number before the current number, it must be prime!
    if (count === 0) {
      arrayOfPrimes.push(potentialPrime); // Add current (prime) number to array of primes
      count = 0; // Reset count
      console.log(`${potentialPrime} is PRIME and has been added to the array!`);
    } else {
      count = 0; // Reset count
      console.log(`${potentialPrime} is not prime.`);
    }
  }
  return `There are ${arrayOfPrimes.length} prime numbers up to and including ${input}. These numbers are ${arrayOfPrimes}.`;
};

prime(100);