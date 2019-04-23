//Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. 

// Requiring our Letter constructor function we exported from letter.js
var Letter = require("./letter.js");

// Constructor function for creating Word objects
var Word = function (myword) {

    // this.letter will hold all of our letter objects for the word to be guessed
    this.letter = [];      
    this.incorrect = [];
    this.correct = [];

    this.word = myword;

    for (i = 0; i < this.word.length; i++) {
        this.letter.push(new Letter(this.word[i]));
    }

    //A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    this.displayString = function () {

        var str = "";
        for (i = 0; i < this.word.length; i++) {
            str = str + this.letter[i].getDispVal() + " ";

        }
        return str;
    };


    this.displayIncorrect = function () {

        var str = "";
        for (i = 0; i < this.incorrect.length; i++) {
            str = str + " " + this.incorrect[i];
        }
        return str;
    };

    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.checkAll = function (mychar) {
        var retval = false;

        for (i = 0; i < this.incorrect.length; i++) {
            if (this.incorrect[i].toLowerCase() == mychar.toLowerCase()) {
                return true;
            }
             
        }

        for (i = 0; i < this.word.length; i++) {
            if (this.letter[i].checkLetter(mychar) == true) {
                retval = true;
            }
        }
        if (retval == true) {
            this.correct.push(mychar);
        }
        else {
            this.incorrect.push(mychar);

        }
        return retval;
    };

    this.isGuessed = function () {
        var retval = true;
        for (i = 0; i < this.word.length; i++) {
            if (this.letter[i].guessed == false) {
                retval = false;
            }
        }
        return retval;
    };

};

// Exporting the Word constructor which we will use in main.js
module.exports = Word;
