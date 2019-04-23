// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Requiring our Word constructor function we exported from word.js
var Word = require("./word.js");


var count=0;
var movieIndex=0
var MaxIncorrect=8;
var WordToGuess;
var wins = 0;
var movie=['Star Wars', 'Titanic', 'Tron', 'Deadpool', 'Black Panther'];


executeRound(movie[movieIndex]); // Kick off game with first round


function executeRound(mymovie){
  console.log("---------------------------------------")
  console.log(" Guess the word:  (" + (movieIndex+1) + " of " + movie.length+")");
  console.log("---------------------------------------")

WordToGuess = new Word(mymovie);
count = 0;

console.log(WordToGuess.displayString());
// console.log()
askQuestion();
}

// Create a "Prompt" with a series of questions.
function askQuestion(){
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "\nEnter a letter",
      name: "letter"
    }
  ])
  .then(function(answer) {
      //console.log("You enneted "+ answer.letter);
      letterGuessed = WordToGuess.checkAll(answer.letter);
      if (letterGuessed==true){
        console.log("CORRECT !!");
        console.log(" ");
      }
      else
      {
        count++;
        console.log("INCORRECT ");
        console.log((MaxIncorrect-count)+ " guesses remaining.  Incorrect-> [" + WordToGuess.displayIncorrect()+"]" );
        console.log(" ");

      }
      console.log(WordToGuess.displayString());
      wordGuessed = WordToGuess.isGuessed();
      if(wordGuessed == true)
      {
        console.log("You Got it Right!");
        console.log(" ");
        wins++;
        movieIndex++;
        if( movieIndex < movie.length){
          console.log("Next word...");
          executeRound(movie[movieIndex]);
        }
        else{
          console.log("GAME OVER");
          console.log("You won " + wins + " out of " + movie.length + " rounds");
        }
      }
      else {
      if(count < 8){
        askQuestion();
      }
      else{
        console.log("Sorry! The word was: " + WordToGuess.word);
        console.log(" ");
        movieIndex++;
        if( movieIndex < movie.length){
          console.log("Next word...");
          executeRound(movie[movieIndex]);
        }
        else{
          console.log("GAME OVER");
          console.log("You won " + wins + " out of " + movie.length + " rounds");
        }

      }
    }

  });
}


