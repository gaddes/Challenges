//: Playground - noun: a place where people can play

import UIKit

// Order months i.e. jan, feb, mar, apr
let monthArray = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

// Give months a set number of days
let dayArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

func dayNumber(month: String, day: Int) -> String {
    
    var output = 0
    
    // Return the index at which the month is found
    // Use .lowercaseString to ensure user input matches up
    if let monthIndex = find(monthArray, month.lowercaseString) {
        
        for var i = 0; i < monthIndex; {
            
            output = output + dayArray[i]
            
            i = i + 1
        }
        
        output = output + day

        return "\(month.capitalizedString) \(day) is day number \(output) in the year"

    // If the string input by user is not a valid month, return an appropriate message
    } else {
        
        return "The month you entered is not valid"
    }
}

dayNumber("february", 3)
