//: Playground - noun: a place where people can play

import UIKit


func alphabetical(inputString: String) -> String {
    
    var output = ""
    
    var arrayForward = sorted(inputString)
    var arrayBackward = sorted(inputString, > )
    
    let stringForward = String(arrayForward)
    let stringBackward = String(arrayBackward)
    
    if inputString == stringForward {
        output = "\(inputString) IN ORDER"
    } else if inputString == stringBackward {
        output = "\(inputString) REVERSE ORDER"
    } else {
        output = "\(inputString) NOT IN ORDER"
    }
    
    return output
}

alphabetical("billowy")
alphabetical("biopsy")
alphabetical("chinos")
alphabetical("defaced")
alphabetical("chintz")
alphabetical("sponged")
alphabetical("bijoux")
alphabetical("abhors")
alphabetical("fiddle")
alphabetical("begins")
alphabetical("chimps")
alphabetical("wronged")