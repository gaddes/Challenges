//: Playground - noun: a place where people can play

import UIKit

/* To covert nearly any number into a palindromic number you operate by reversing the digits and adding and then repeating the steps until you get a palindromic number. Some require many steps.

e.g. 24 gets palindromic after 1 steps: 66 -> 24 + 42 = 66

while 28 gets palindromic after 2 steps: 121 -> 28 + 82 = 110, so 110 + 11 (110 reversed) = 121.

Note that, as an example, 196 never gets palindromic (at least according to researchers, at least never in reasonable time). Several numbers never appear to approach being palindromic. */

// N.B. This function is limited in the size of the subTotal it can work with. This is because we are working only with Int, which has a range of –2,147,483,648 to 2,147,483,647

func convertToPalindrome(input: Int) {
    
    // Original string (or new string after addition)
    var stringNo1 = ""
    // Reversed string
    var stringNo2 = ""
    // subTotal holds the current value, updating each time the calculation runs through
    var subTotal: Int = 0
    // Counts number of steps taken to become palindromic
    var i: Int = 0
    
    // Convert input to string so that it can be reversed and checked for a palindrome
    stringNo1 = String(input)
    
    // The reverse() algorithm returns an array of characters, so we must use the following loop to create stringNo2 (the reverse of stringNo1). This loop appends each character in the array sequentially to stringNo2.
    for ch in Array(stringNo1.characters.reverse()) {
        stringNo2.append(ch)
    }
    
    // Check whether the input is already palindromic
    if String(input) == stringNo2 {
        print("Number \(input) is already a palindrome!")
    }
    
    // Check that stringNo1 does not equal stringNo2 (i.e. it has not yet become palindromic)
    while stringNo1 != stringNo2 {
        // Reset stringNo2
        stringNo2 = ""
        
        // Reverse original string and then create a copy by appending characters sequentially to the end of new variable reversedString
        for ch in Array(stringNo1.characters.reverse()) {
            stringNo2.append(ch)
        }
        
        // Check whether number is a palindrome
        if stringNo1 == stringNo2 {
            print("\(input) becomes palindromic after \(i) steps: \(subTotal)")
            break

        // If number has not become palindromic, sum the integer value of the two strings and assign to stringNo1, ready for the next loop
        } else {
            subTotal = Int(stringNo1)! + Int(stringNo2)!
            stringNo1 = String(subTotal)
        }
        
        // Increment loop counter by one
        i++
    }
}

convertToPalindrome(286)
