// This function changes the letters of an input string based on their charCode - see coderbyte challenge

function LetterChanges(str) {
    let outputString = "";
    for (i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) + 1 === 97 || str.charCodeAt(i) + 1 === 101 || str.charCodeAt(i) + 1 === 105 || str.charCodeAt(i) + 1 === 111 || str.charCodeAt(i) + 1 === 117) { // if character is vowel
            outputString += String.fromCharCode(str.charCodeAt(i) + 1).toUpperCase(); // add to outputString and increase by one and transform to uppercase using ascii values
        } else if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) { // if character is lowercase letter
            outputString += String.fromCharCode(str.charCodeAt(i) + 1); // add to outputString and increase ascii by one
        } else {
            outputString += str.charAt(i);
        }
    }
    return outputString; 
}

LetterChanges("fun times!");