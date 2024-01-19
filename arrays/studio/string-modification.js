const input = require('readline-sync');
let str = "LaunchCode";

let piglatin = str.slice(3) + str.slice(0,3)

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let quantity = input.question('Input numbers of lettes to move: ')

let answer


if (quantity < 0) {
    console.log('negative number')
    } else if (quantity > str.length) {
        quantity = 3
        answer = str.slice(quantity) + str.slice(0, quantity)
        console.log(`Output: ${answer}`)
    } else {
        answer = str.slice(quantity) + str.slice(0, quantity)
        console.log(`Output: ${answer}`)
    }
    
    

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
