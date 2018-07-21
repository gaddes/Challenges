//: Playground - noun: a place where people can play

import UIKit

// This code takes an input (an array of type String) and shuffles the words or numbers before outputting them in a random order. Sequential runs of the program should yield different outputs.

// Use an array to store inputted values. The values automatically assigned to the array can then be shuffled in a random order before the associated words are output.

// This array accepts variables of type String only. The aim is that numbers and characters can both be converted into strings before they are output.


func ShuffleArray(inputArray: [AnyObject]) -> [String]? {
    
    // Input must be defined as 'AnyObject' so that we can implement error handling in the case where the user inputs a value that is not of type String
    var input: [AnyObject] = []
    var output: [String] = []
    
    // Pre-emptive error handling
    if inputArray.isEmpty { return nil }
    
    // Check that inputArray is of type String
    if inputArray is [String] {
        
        // Take input array and assign to new variable. This allows us to remove values from the array (within the 'for' loop below)
        input = inputArray
        
        for var i = 0; i < (input.count); {
            
            // Remove items, one at a time, from a random location within 'input' before appending item to 'output'
            // 'as! String' converts each item within 'input' (defined as type 'AnyObject') to type 'String' before appending to 'output'
            // N.B. a number of type conversions are necessary, since the arc4random function works only with objects of type 'UInt32'
            output.append(input.removeAtIndex(Int(arc4random_uniform(UInt32(input.count)))) as! String)
        }
        
        return output
        
    // Handle the case where inputArray is NOT of type String
    } else {
        
        println("Each item in the array must be of type 'String'")
        return nil
    }
}

let test = ShuffleArray(["Hello", "Matt", "Alice", "Door", "Bookshelf"])
