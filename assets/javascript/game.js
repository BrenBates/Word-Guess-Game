
var Initial= {
    "movieText" : "Can you guess the movie?",
    "moviePicture" : "assets/images/movies.jpg",
    "movieSound" : "assets/mp3/CenturyFox.mp3"
};

var Braveheart= {
    "movieName" : "braveheart",
    "movieText" : "Playing: Braveheart Theme Song",
    "moviePicture" : "assets/images/Braveheart.jpg",
    "movieSound" : "assets/mp3/Braveheart.mp3"
};


var Deadpool= {
    "movieName" : "deadpool",
    "movieText" : "Playing: X Gon' Give It To Ya by DMX",
    "moviePicture" : "assets/images/Deadpool.jpg",
    "movieSound" : "assets/mp3/DMXXGonnaGiveToYa.mp3"
};


var Titanic= {
    "movieName" : "titanic",
    "movieText" : "Playing: My Heart Will Go On by Celine Dion ",
    "moviePicture" : "assets/images/Titanic.jpg",
    "movieSound" : "assets/mp3/MyHeartWillGoOn.mp3"
};

var Jaws= {
    "movieName" : "jaws",
    "movieText" : "Playing: Jaws Theme",
    "moviePicture" : "assets/images/Jaws.jpg",
    "movieSound" : "assets/mp3/JawsTheme.mp3"
};

var Starwars= {
    "movieName" : "starwars",
    "movieText" : "Playing: Lord of the Rings Theme",
    "moviePicture" : "assets/images/starwars.jpg",
    "movieSound" : "assets/mp3/Starwars.mp3"
};

var GameOver = {
    "Text" : "Game Over!",
    "Picture" : "assets/images/gameOver.jpg",
    "Sound" : "assets/mp3/GameOverMan.mp3"
};

var Victory = {
    "Text" : "You win!",
    "Picture" : "assets/images/Victory.jpg",
    "Sound" : "assets/mp3/SurvivorEyeoftheTiger.mp3"
};




//Main Process
//==========================================================================================
   
   // Set-up necessary variables for wins counter, movies index, number of guesses etc.
//==========================================================================================

var Movies = [Initial, Braveheart, Deadpool, Titanic, Jaws, Starwars];
var wins= 0;
var movieIndex = 1;
var x = 10;
var game_over = false;

//Current word is the word on the screen that will change as they are guessing letters. For loop to first clear out the currentWord of the last word variable and then to push underscores to it for the length of the new word.
var currentWordMatrix = [];

//Create an array to store the guessed letters. 
var lettersGuessedMatrix = [];

//Make an array containing all of the audio.
var audio = [];
audio.length = Movies.length;

for (var k = 0; k < Movies.length; k++) {
    audio[k] = new Audio(Movies[k].movieSound);
}

//Play initial sound.
audio[0].play();


// Main Process 
// ==========================================================================================

  
//Set up the movie text, picture and sound to be for the last word that they just guessed.
    document.querySelector("#movieText").innerHTML = Movies[movieIndex-1].movieText;
    document.querySelector("#movieImage").innerHTML = '<img src= ' + Movies[movieIndex-1].moviePicture + '>';



   var blank;

       for (var i = 0; i < Movies[movieIndex].movieName.length; i++)  {
           blank = "_";
           currentWordMatrix.push(blank);
       }

    //Join the currentWordMatrix entries together to make the currentWord string.  Also, make it lower case.
   var currentWord = currentWordMatrix.join('');

   var solutionWord = Movies[movieIndex].movieName;


   //Push the current word to the screen
   document.querySelector("#currentWord").innerHTML = currentWord;

   runGame();
      

// Functions 
// ========================================================================================


// Function that updates the number of wins...
function updateWins() { 
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}

function reset() {

    // Set-up necessary variables for wins counter, movies index, number of guesses etc.
//==========================================================================================



Movies = [Initial, Braveheart, Deadpool, Titanic, Jaws];
wins= 0;
movieIndex = 1;
x = 10;
game_over = false;

//Current word is the word on the screen that will change as they are guessing letters. For loop to first clear out the currentWord of the last word variable and then to push underscores to it for the length of the new word.
currentWordMatrix = [];

//Create an array to store the guessed letters. 
lettersGuessedMatrix = [];

//Make an array containing all of the audio.
audio = [];
audio.length = Movies.length;

for (var k = 0; k < Movies.length; k++) {
    audio[k] = new Audio(Movies[k].movieSound);
}

//Play initial sound.
audio[0].play();
  
//Set up the movie text, picture and sound to be for the last word that they just guessed.
    document.querySelector("#movieText").innerHTML = Movies[movieIndex-1].movieText;
    document.querySelector("#movieImage").innerHTML = '<img src= ' + Movies[movieIndex-1].moviePicture + '>';

   var blank;

       for (var i = 0; i < Movies[movieIndex].movieName.length; i++)  {
           blank = "_";
           currentWordMatrix.push(blank);
       }

    //Join the currentWordMatrix entries together to make the currentWord string.  Also, make it lower case.
   currentWord = currentWordMatrix.join('');

   solutionWord = Movies[movieIndex].movieName;


   //Push the current word to the screen
   document.querySelector("#currentWord").innerHTML = currentWord;

   runGame();
}

function runGame() {


  
     
   //When user pushes a key, perform various functions. 

    document.onkeydown = function(event) {

       
    
        //Converting the keyinput to lower case.  The game won't include upper case letters.

            var keyInput = event.key.toLowerCase(); 
          
           document.querySelector("#guessLetter").innerHTML = keyInput
          
           document.querySelector("#guessesRemaining").innerHTML = x;

           document.querySelector("#wins").innerHTML = wins;


           //Check if the guessed letters matrix includes the key pushed, if not add it to the list. 
           
           if (lettersGuessedMatrix.includes(keyInput + ', ') === false) {
               lettersGuessedMatrix.push(keyInput + ', ');
            //reduce number of guesses remaining.
            x = x-1; 
           
           }

           var Guesses = lettersGuessedMatrix.join('');
           console.log(Guesses);
          document.querySelector("#guessedLetters").innerHTML = Guesses;
             

           //If the user guesses a letter that is contained in the solution word, then add it to the current word.
           for (var j=0; j < currentWord.length;j++) {

            if (solutionWord.charAt(j) === keyInput) {
                newWord = currentWord.substring(0,(j)) + keyInput + currentWord.substring((j+1),length.currentWord);
                currentWord = newWord;
                document.querySelector("#currentWord").innerHTML = currentWord;
            } 
        }

            //reduce the allowable guesses count.  If user goes below 0 it's a game over.
       
            if(x <= 0) {
                audio[movieIndex].pause();
                audio[movieIndex].currentTime = 0;
                gameOver()
            }
           
    
            //Completely guessing a word will set up the next movie and increase the win count. 
           
        
            if(currentWord === solutionWord && movieIndex !== Movies.length && game_over === false) {
                
                nextMovie()  

            }

            if(currentWord === solutionWord && movieIndex === Movies.length) {
                youWin()  
             }
          


        }


}

function gameOver() {
   
    audio[movieIndex-1].pause();
    audio[movieIndex-1].currentTime = 0;
    var gameovermusic = new Audio(GameOver.Sound);
    gameovermusic.play();
    game_over = true;
    document.querySelector("#movieImage").innerHTML= '<img src= ' + GameOver.Picture + '>';
    document.querySelector("#movieText").innerHTML = GameOver.Text + " You got " + wins + " out of " + (Movies.length-1) + " movies!  Press 'r' to restart";
    document.querySelector("#currentWord").innerHTML = 'Game is Over';

    document.onkeydown = function(event) {
       
        //Converting the keyinput to lower case.  The game won't include upper case letters.

            var keyInput = event.key.toLowerCase(); 
            console.log(keyInput);
            if (keyInput === 'r') {
                gameovermusic.pause()
                gameovermusic.currentTime = 0;
                reset()
            }
        }
}

function youWin() {

    
    audio[movieIndex-1].pause();
    audio[movieIndex-1].currentTime = 0;
    var youwinaudio = new Audio(Victory.Sound);
    youwinaudio.play();

    game_over = true;
    document.querySelector("#movieImage").innerHTML= '<img src= ' + Victory.Picture + '>';
    document.querySelector("#movieText").innerHTML = Victory.Text + " You got " + wins + " out of " + (Movies.length-1) + " movies!  Press 'r' to restart";
    document.querySelector("#currentWord").innerHTML = 'You win!';

    document.onkeydown = function(event) {
       
        //Converting the keyinput to lower case.  The game won't include upper case letters.

            var keyInput = event.key.toLowerCase(); 
            console.log(keyInput);
            if (keyInput === 'r') {
                youwinaudio.pause()
                youwinaudio.currentTime = 0;
                reset()
            }
        }

}


function nextMovie() {

    
    console.log('Ready for the next movie!');

    audio[movieIndex-1].pause();
    audio[movieIndex-1].currentTime = 0;
    audio[movieIndex].play();

    //movie index + 1, wins + 1 and reset currentWord and solutionWord
    movieIndex++;
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    x = 10;
    currentWordMatrix = [];
    lettersGuessedMatrix = [];

    //Set up the movie text, picture and sound to be for the last word that they just guessed.
    document.querySelector("#movieText").innerHTML = Movies[movieIndex-1].movieText;
    document.querySelector("#movieImage").innerHTML = '<img src= ' + Movies[movieIndex-1].moviePicture + '>';

    for (var i = 0; i < Movies[movieIndex].movieName.length; i++)  {
        blank = "_";
           currentWordMatrix.push(blank);
       }

//Join the currentWordMatrix entries together to make the currentWord string.  Also, make it lower case.
       currentWord = currentWordMatrix.join('');
       solutionWord = Movies[movieIndex].movieName;


//Push the current word to the screen
document.querySelector("#currentWord").innerHTML = currentWord;


}





   

   




















