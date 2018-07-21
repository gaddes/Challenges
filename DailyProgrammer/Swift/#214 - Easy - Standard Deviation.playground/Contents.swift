//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

// Inspiration taken from r/dailyprogrammer Challenge #214: Calculating the standard deviation - URL: http://www.reddit.com/r/dailyprogrammer/comments/35l5eo/20150511_challenge_214_easy_calculating_the/
// Function adapted from Apple's arithmeticMean() function in the Swift Language Guide
// This function is capable of returning the mean, the variance and the standard deviation of a set of values. The various mathematical functions may be accessed through use of the "." operator when calling the function
func mathematicalFunctions(numbers: Double...) -> (mean: Double, variance: Double, standardDeviation: Double) {
    var total: Double = 0
    for number in numbers {
        total += number
    }
    
    var mean = total / Double(numbers.count)
    var numberOfValues = Double(numbers.count)
    
    // For each value in the population, calculate the difference between it and the mean value, then square the difference. Then sum these values.
    var tempTotal: Double = 0
    for number in numbers {
        tempTotal += pow(number - mean, 2)
    }
    
    // Calculate variance
    var variance = tempTotal / numberOfValues
    
    // Calculate standard deviation
    var stDev = sqrt(variance)
    
    return (mean, variance, stDev)
}

mathematicalFunctions(5, 6, 11, 13, 19, 20, 25, 26, 28, 37).standardDeviation