function script() { //this function holds all of the validation for the six fields
    var simple = document.getElementById("input-simple").value; //get the user input for the 'simple' field
    var obscure = document.getElementById("input-obscure").value; //get the user input for the 'obscure' field
    var number = document.getElementById("input-number").value; //get the user input for the 'number' field
    var message = ""; //sets the message variable as empty
    if (simple == "" || obscure == "" || number == "") //if any of the fields are empty...
    {
        message = "Please fill in all fields"; //add an error to the message
    }
    else if (isNaN(number)) //checks if the number field is a number, and if not...
    {
        message += "Please enter only numbers in the number field"; //add an error to the message
    }
    else if (simple.length < 4 || obscure.length < 4) //ensure there is a minimum of 4 characters per letter field
    {
        message += "Please enter at least four characters per field" //add an error to the message
    }
    else if (simple.length > 15 || obscure.length > 15 || number.length > 15) //check if the number of characters exceeds 15 and if it does then
    {
        message += "Please limit each answer to 15 characters" //add an error to the message
    }
    else if (spaceCheck(simple) || spaceCheck(obscure) || spaceCheck(number)) //calls a function with each value that checks for whitespace
    {
        message += "Spaces are not allowed, please remove them." //adds an error to the message
    }
    else if (specialCheck(simple, obscure)) //calls a function that checks whether the simple and obscure strings combined have special characters or not
    {
        message += "Please ensure there is a minimum of one special character in either of the text inputs (e.g. @ # $ % &)";
    }
    else if (caseCheck(simple, obscure))
    {
        message += "Please ensure there is a minimum of one uppercase character in either of the text inputs";
    }
    else //if everything is fine then...
    {
        formSubmit(simple, obscure, number); //call the function that will display the password
        animate();
    }
    if (message != "") //if message is not empty, then...
    {
        alert(message); //trigger an alert with the error
    }
}

function spaceCheck(value) {
    value = value.split(' '); //split the string in an array of strings using whitespace as separator
    return (value.length != 1); //false when there is only one word, true else
}

function specialCheck(v1, v2) { //passes sim ple and obscure as v1 and v2
    var string = v1 + v2;//combines v1 and v2 into a single string for easy checking
    if(string.match(/[_\W0-9]/)) //checks if the string contains any special characters
    {
        return false //user input has special characters, therefore validation returns false to the if statement
    } else {
        return true //user input has no special characters, therefore validation returns true and triggers an error
    }
}

function caseCheck(v1, v2) {
    var string = v1 + v2; //combines v1 and v2 into a single string for easy checking
    var array = string.split(""); //splits the string into an array of single characters and assigns it to the
    var counter = 0; //defines a variable that will count the number of capital letters
    for (i = 0; i < array.length; i++)
    {
        if (!isNaN(array[i]) || array[i].match(/[_\W0-9]/)) //checks if a character is numeric or a special character, in order to avoid errors
        {
        }
        else if (array[i] == array[i].toUpperCase()) //checks if the character matches the capital version of the same character
        {
            counter++; //increments the counter for each capital letter
        }
    }
    if (counter == 0) //check if the counter has been incremented, thus checking if there are any capital letters
    {
        return true; //return true and trigger the error
    }
    else {
        return false; //return false
    }
}

function formSubmit(simple, obscure, number) { //merges the strings and displays them on the screen
    document.getElementById("password-output").innerHTML = simple + "-" + obscure + "-" + number;
}

function animate() {  //makes the password animate (but only once)
    document.getElementById('password-output').className = "animation";
}

function button() {
    script();
}