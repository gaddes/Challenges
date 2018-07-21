//: Playground - noun: a place where people can play

import UIKit

// Function accepts two separate integers as input and returns an array of type String
func passwordGenerator(numberOfPasswords: Int, numberOfCharactersInEach: Int) -> [String] {
    
    // Create output array of type String. This will hold as many passwords as required
    var output = [String]()
    
    // All the characters that may be used in the creation of a password
    let characters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    // The array version of the above
    let charactersArray = Array(characters)
    
    // Total number of characters to choose from
    let num = UInt32(count(characters))
    
    for var i = 0; i < numberOfPasswords; {
        
        var password = ""
        
        for var j = 0; j < numberOfCharactersInEach; {
            
            // Create a random number within a range from 0 to the total number of characters available
            var rand = Int(arc4random_uniform(num))
            
            // Select a character at a random position within charactersArray (using the random number generated above), and append this to the current password
            password.append(charactersArray[rand])
            
            j = j + 1
        }
        
        // Append password to the output (containing arrays of type String)
        output.append(password)
        
        i = i + 1
    }
    
    return output
}

passwordGenerator(7, 15)
