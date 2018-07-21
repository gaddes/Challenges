//: Playground - noun: a place where people can play

import UIKit

extension String {
    
    func capitaliseWithExceptions(exceptions: String) -> String {
        
        // Capitalise every word
        var inputCap = self.capitalizedString
        var exceptionCap = exceptions.capitalizedString
        
        // Split strings into an array of individual words using the whitespace character as a delimiter
        var inputArray = split(inputCap) {$0 == " "}
        var exceptionArray = split(exceptionCap) {$0 == " "}
        
        for var i = 0; i < exceptionArray.count; {
            
            for var j = 0; j < inputArray.count; {
                
                if exceptionArray[i] == inputArray[j] {
                    
                    // Constant holding the lowercase value of the current string
                    let temp = inputArray[j].lowercaseString
                    // Replace current (capitalised) value with lowercase value
                    inputArray[j] = temp
                }
                
                j = j + 1
            }
            
            i = i + 1
        }
        
        // Call on extension created below to capitalise the first letter only
        let output = " ".join(inputArray).capitaliseFirstLetterOnly()
        
        return output
    }
    
    func capitaliseFirstLetterOnly() -> String {
        
        // Separate the input string into an array of individual characters
        var inputArray = Array(self)
        
        // Create a variable of type String to hold only the first letter of the input string
        var temp = ""
        temp.append(inputArray[0])
        
        // Capitalise the character
        let tempCap = temp.capitalizedString
        
        // Replace the initial (non-capitalised) character with the new (capitalised) character
        // Place the new (capitalised) character into the array at the position of the original character
        inputArray[0] = Character(tempCap)
        
        // Turn array back into a String
        let output = String(inputArray)
        
        return output
    }
}

let str = "one two three four five one"

str.capitaliseWithExceptions("one two")
