//: Playground - noun: a place where people can play

import UIKit

// Separate both strings into arrays

// For each letter in the second array, search through the first array and remove wherever it is encountered


func removeCharacter (initialString: String, charsToRemove: String) -> String {
    
    /* Create variable version of initialString.
     * N.B. initialString can be made variable within the arguments of the function. If this was the case, however, the name of the output string would be "initialString". For clarity, I prefer to have a separate variable named "output".
     */
    var output = initialString
    
    // Isolate each character in the specified string containing characters to be removed
    for ch in charsToRemove.characters {
        
        // Convert character to string version, so that the following function may be called upon
        let stringCh = String(ch)
        
        // Amend output string by replacing the current stringCh with "" (i.e. nothing)
        output = output.stringByReplacingOccurrencesOfString(stringCh, withString: "")
    }
    
    return output
}

removeCharacter("Daily Programmer", charsToRemove: "aeiou ")
