
var Initial= {
    "movieText" : "Can you guess the movie?",
    "moviePicture" : "assets/images/movies.jpg",
    "movieSound" : "/assets/mp3/CenturyFox.mp3"
};

var Braveheart= {
    "movieName" : "Braveheart",
    "movieText" : "Playing: Braveheart Theme Song",
    "moviePicture" : "assets/images/Braveheart.jpg",
    "movieSound" : "assets/mp3/Braveheart.mp3"
};


var Deadpool= {
    "movieName" : "Deadpool",
    "movieText" : "Playing: X Gon' Give It To Ya by DMX",
    "moviePicture" : "assets/images/Deadpool.jpg",
    "movieSound" : "assets/mp3/DMXXGonnaGiveToYa.mp3"
};


var Titanic= {
    "movieName" : "Titanic",
    "movieText" : "Playing: My Heart Will Go On by Celine Dion ",
    "moviePicture" : "assets/images/Titanic.jpg",
    "movieSound" : "assets/mp3/MyHeartWillGoOn.mp3"
};

var Jaws= {
    "movieName" : "Jaws",
    "movieText" : "Playing: Jaws Theme",
    "moviePicture" : "assets/images/Jaws.jpg",
    "movieSound" : "assets/mp3/JawsTheme.mp3"
};

var Movies = [Initial, Braveheart, Deadpool, Titanic, Jaws];
var wins= 0;
var movieIndex = 1;
var x = 10;




// Functions 
// ========================================================================================



// Function that updates the number of wins...
function updateWins() { 
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}

// Function to Run the Game.  


    //Set up the movie text, picture and sound to be for the last word that they just guessed.
    document.querySelector("#movieText").innerHTML = Movies[movieIndex-1].movieText;
    document.querySelector("#movieImage").innerHTML = '<img src= ' + Movies[movieIndex-1].moviePicture + '>';

    //Current word is the word on the screen that will change as they are guessing letters. For loop to first clear out the currentWord of the last word variable and then to push underscores to it for the length of the new word.

    var currentWordMatrix = [];
    var blank;

        for (var i = 0; i < Movies[movieIndex].movieName.length; i++)  {
            blank = "_";
            currentWordMatrix.push(blank);
        }


     //Join the currentWordMatrix entries together to make the currentWord string
    var currentWord = currentWordMatrix.join('');
    return currentWord; 

}

    var solutionWord = Movies[movieIndex].movieName;

      //Push the current word to the screen
      document.querySelector("#currentWord").innerHTML = currentWord;

    if(currentWord !== solutionWord) {
     
    //When user pushes a key, perform various functions. 

        document.onkeydown {
            var keyInput = event.key; 
            document.querySelector("#guessLetter").innerHTML = keyInput
            x = x-1; 
            document.querySelector("#guessesRemaining").innerHTML = x;
            console.log(keyInput);


            if(x <= 0) {
                gameOver()
            }

            for(var j=0, j < solutionWord)

         }
        
    }






function gameOver() {
   
    Initial.moviePicture = "assets/images/gameOver.jpg";
    Initial.movieText = "Congratulations, you got " + wins + " out of " + Movies.length + " correct!";
}




// Main Process 
// ==========================================================================================

// Calling functions to start the game











