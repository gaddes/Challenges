//: Playground - noun: a place where people can play

import UIKit

// 1. Remove spaces, full stops, commas, hyphens
// 2. Reverse input string
// 3. Compare reversed string with original input
// 4. If input == reversed then "Palindrome!"

func palindrome(input: String) -> String {
    
    // Input string (remove spaces, full stops, commas, hyphens)
    var inputString = input
    
    
    // Array of characters to be removed
    let unwantedCharacters = [" ", ".", ",", "-", "?", "!", ":", ";", "’", "\"", "“", "”", "…", "(", ")"]
    
    // For each character within array, search inputString and remove
    for char in unwantedCharacters {
        inputString = inputString.stringByReplacingOccurrencesOfString(char, withString: "")
    }
    
    // Reversed string
    var reversedString = ""
    
    // The reverse() algorithm returns an array of characters, so we must use the following loop to create reversedString (the reverse of inputString). This loop appends each character in the array sequentially to reversedString.
    for ch in Array(inputString.characters.reverse()) {
        reversedString.append(ch)
    }
    
    
    if inputString.lowercaseString == reversedString.lowercaseString {
        return "Palindrome!"
    } else {
        return "Not a palindrome!"
    }
}

palindrome("Dammit I’m mad. Evil is a deed as I live. God, am I reviled? I rise, my bed on a sun, I melt. To be not one man emanating is sad. I piss. Alas, it is so late. Who stops to help? Man, it is hot. I’m in it. I tell. I am not a devil. I level “Mad Dog”. Ah, say burning is, as a deified gulp, In my halo of a mired rum tin. I erase many men. Oh, to be man, a sin. Is evil in a clam? In a trap? No. It is open. On it I was stuck. Rats peed on hope. Elsewhere dips a web. Be still if I fill its ebb. Ew, a spider… eh? We sleep. Oh no! Deep, stark cuts saw it in one position. Part animal, can I live? Sin is a name. Both, one… my names are in it. Murder? I’m a fool. A hymn I plug, deified as a sign in ruby ash, A Goddam level I lived at. On mail let it in. I’m it. Oh, sit in ample hot spots. Oh wet! A loss it is alas (sip). I’d assign it a name. Name not one bottle minus an ode by me: “Sir, I deliver. I’m a dog” Evil is a deed as I live. Dammit I’m mad.")