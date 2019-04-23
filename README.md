##### Georgia Tech Coding Boot Camp at Prototype Prime

# Constructor Word Guess
## node/npm/inquirer

- A Word Guess command-line game using constructor functions.

- The game takes user input using the inquirer npm package.

- It contains three files:

* **letter.js**: Contains a constructor, Letter. This constructor either displays an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 

* **word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. It depends on 'letter.js'

* **main.js**: This file contains the logic for the course of the game, which depends on `Word.js` and:

  *  Selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses
  
  ![Image of screen1](https://github.com/bootcamper247/Constructor-Word-Guess/blob/master/images/one.png)
  ![Image of screen2](https://github.com/bootcamper247/Constructor-Word-Guess/blob/master/images/two.png)
  ![Image of screen3](https://github.com/bootcamper247/Constructor-Word-Guess/blob/master/images/three.png)













  



  

