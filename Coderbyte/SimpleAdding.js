// This function adds every number from 1 to a certain argument

function SimpleAdding(num) { 
    let result = 0;
    for (numCopy = num; numCopy > 0; numCopy--) {
        result += numCopy;
    }
    // code goes here  
    return result; 
}

SimpleAdding(140);