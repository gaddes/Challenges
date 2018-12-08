function SimpleSymbols(str) { 
    
    // For loop - test whether char before AND after is '+' symbol
    for (i = 1; i < str.length; i++) {
        // Test if character is letter (upper or lower case)
        if ((str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) || (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91)) {
            // Test if letter is surrounded by '+' symbol (charCode = 43)
            if (str.charCodeAt(i - 1) === 43 && str.charCodeAt(i + 1) === 43) {
                // Do nothing, continue with FOR loop
            } else {
                return false; // If letter is not surrounded by '+' symbol then it fails the test! Return FALSE
            }
        } else {
            // If character is not a letter, we don't caaare about it... continue with FOR loop
        }
    }
    return true;
}

SimpleSymbols("+d+=3=+s+"); // return TRUE