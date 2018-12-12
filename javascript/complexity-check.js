
function complex_check() {
    
    //memes
    document.getElementById("notbad").style.display = "none";
    
    //Retrieve the input from the user
    var password = document.getElementById("check").value;
    
    //defining most needed variables
    var ErrMsg = "", result = true, pWordStrength = 0, Char = "", noSpecChar = 0, noNum = 0, capLet = false, lowLet = false; 
    
    //check if the input exists
    if (password == null || password == "") {
        result = false;
        ErrMsg += "You have not entered a password\n";
    }
    
    //check the length
    var pwordLength = password.length;
    if (pwordLength <= 5) {
         //do nothing
    } else if (pwordLength >= 6 && pwordLength <= 9) {
        //add one to the stength index
        pWordStrength++;
    } else if (pwordLength >= 10) {
        pWordStrength += 2;
    }
    
    //define special characters format
    var format = "*|,\“:<>[]{}`\’;()@&$#%!";

    //loop through the string to check each character for certain conditions
    for (i = 0; i < password.length; i++) {
        
        //define the current character
        var current = password.charAt(i);
        
        //if the character at index is a special character
        if (format.indexOf(current) != -1 && noSpecChar < 2) {
            //increment strength and the special character numnber of
            pWordStrength += 2;
            noSpecChar++;
        }  else if(format.indexOf(current) != -1) {
            pWordStrength++;
        }
        
        //check if this character is same as previous character
        if (Char == current){
                pWordStrength--;
        }

        //check if the charcter is a number
        var NaNcurrent = current * 1;
        if (!(isNaN(NaNcurrent)) && noNum < 2) {
            pWordStrength++;
            noNum++;
        }
        
        //checking for existence of capital letters (taking into account the fact that special characters are treated as capitals it seemd)
        if (current == current.toUpperCase() && isNaN(NaNcurrent)) {
            if (format.indexOf(current) != -1) {
                //do nothing
            } else {
            capLet = true;
            }
        } else if (current == current.toLowerCase() && isNaN(NaNcurrent)) {
            lowLet = true;
        }
        
        //store the character at current for next iteration of the loop
        Char = password.charAt(i);
        
        //increment the metric 
        pWordStrength++;
    } //End individual character loop
    
    //check if Capital and Lowercase letters both exist
    if (capLet && lowLet) {
        pWordStrength = pWordStrength + 2;
    }
    
    console.log("Strength is: " + pWordStrength);
    
    if(ErrMsg == "") {
        //do successful thing
        //console.log(pWordStrength);
        document.getElementById("error").innerHTML = "";
        if (pWordStrength <= 12) {
            document.getElementById("strength").innerHTML = "Password Strength: Very Weak";
            document.getElementById("strength").style.color = "#ff0000"

        } else if (pWordStrength >= 13 && pWordStrength <= 16) {
            document.getElementById("strength").innerHTML = "Password Strength: Weak";
            document.getElementById("strength").style.color = "#990000"

        } else if (pWordStrength >= 17 && pWordStrength <= 22 ) {
            document.getElementById("strength").innerHTML = "Password Strength: Moderate";
            document.getElementById("strength").style.color = "#ee8c28"

        } else if (pWordStrength >= 23) {
            document.getElementById("strength").innerHTML = "Password Strength: Strong";
            document.getElementById("strength").style.color = "#00cc00"
            document.getElementById("notbad").style.display = "inline";
        }
        
        if (pWordStrength >= 17) {
            document.getElementById("redirect").innerHTML = "Your Password is good. If you would like to see the password generator, please click on the button below <br/> <a class='link-button' type='button' href='password-generator.html'>GENERATOR</a>"
        } else {
            document.getElementById("redirect").innerHTML = "Your password is too weak, your sensitive information is at risk. See the password generator, please click on the button below <br/> <a class='link-button' type='button' href='password-generator.html'>GENERATOR</a>"
        }
    } else {
        //display the problems
        document.getElementById("error").innerHTML = ErrMsg;
        //hide the button
        
        //present user with reasons why their password must be as strong as it is
        
        //present button to redirect to password-generator
    }
}

function hasNumbers(t)
{
return /\d/.test(t);
}

function init() {
    //memes
    document.getElementById("notbad").style.display = "none";
}

window.onload = init;