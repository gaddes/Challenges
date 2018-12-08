function LetterCapitalize(str) { 

    let finalArray = [];
    let finalString = '';

    // Split words using ' ' - this will return an array of individual words
    const words = str.split(' ');

    // loop through array - for each word, capitalise only the first letter
    for (i = 0; i < words.length; i++) {
        // split word into characters
        const chars = words[i].split('');
        // Convert first letter only to upper case
        chars[0] = chars[0].toUpperCase();
        // join characters back together
        const newWord = chars.join('');
        // Add this new, capitalised word to the final array
        finalArray.push(newWord);
    }

    // Concatenate words in new array into a single string with spaces between each word using array.join(' ')
    finalString = finalArray.join(' ');

    return finalString; 
}

LetterCapitalize('hello world'); // return "Hello World"