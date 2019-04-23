// Letter.js: Contains a constructor, Letter. This constructor displays an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 



function Letter(mychar) {

    // A string value to store the underlying character for the letter
    this.value = mychar;

    // A boolean value that stores whether that letter has been guessed yet
    this.guessed = false; 
    
    if(mychar == " ")
    {
        // console.log("FORCING TRUE FOR SPACE");
        this.guessed = true;
    }

    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

    this.getDispVal = function () {
        
        //console.log("inside getDispVal  ");

        if(this.guessed == true) {
        return this.value; 
    }
        else {
            return "_";
        }
    };

    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

    this.checkLetter = function (myguess) {
    //    console.log("inside letter myguess = "+myguess);
    
        if(myguess.toLowerCase() === this.value.toLowerCase()){
            this.guessed = true;
            return true;
        }else {
                return false;
        }
    };
}

// Exporting our Letter constructor. We will require it in word.js
module.exports = Letter;

