//
//  ViewController.swift
//  #001 - Easy - AskUser
//
//  Created by Matthew Gaddes on 16/08/2015.
//  Copyright (c) 2015 Matthew Gaddes. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var name: UITextField!
    @IBOutlet weak var age: UITextField!
    @IBOutlet weak var emailAddress: UITextField!
    @IBOutlet weak var outputLabel: UILabel!
    
    @IBAction func Enter(sender: UIButton) {
        
        var output = ""
        let tempName = name?.text
        let tempAge = age?.text
        let tempEmail = emailAddress?.text
        
        if tempName!.isEmpty || tempAge!.isEmpty || tempEmail!.isEmpty {
            output = "Please enter your Name, Age and Email Address"
        } else {
            output = "Your name is \(tempName!), you are \(tempAge!) years old, and your email address is \(tempEmail!)"
        }
        outputLabel.text = output
    }
}

