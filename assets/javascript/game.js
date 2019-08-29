//Programmer: Brennen Bates
//Date: 8/28/2019

////////////
//Preface://
////////////

//I chose to set up the movie options as objects with attributes for the picture, sound and the text that will display under the header at the top.


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
    "movieText" : "Playing: Careless Whisper by George Michael",
    "moviePicture" : "assets/images/Deadpool.jpg",
    "movieSound" : "assets/mp3/CarelessWhisper.mp3"
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
    "movieText" : "Playing: Star Wars Theme",
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



///////////////
//Main Process/
///////////////

//======================================================================================//
//   Set-up necessary variables for wins counter, movies index, number of guesses etc.  //
//======================================================================================//

//Set the movie objects above into an array so that they can be cycled through later. 

var Movies = [Initial, Braveheart, Deadpool, Titanic, Jaws, Starwars];
var wins= 0;
//I set the movie index to 1 inidially, bedause I stored the initial webpage settings in the 0 index.
var movieIndex = 1;

//I set up variable x as the number of guesses remaining.  I used x because I used 'guesses remaining' as the id for the html document.
var x = 15;

//Game over variable equal to false.  I set my game up so that if they run out of remaining guesses they get a prompt to push 'r' to restart the game.  
//They can do that in the end of the game too if they win.
var game_over = false;

//Current word is the word on the screen that will change as they are guessing letters. 
//For loop to first clear out the currentWord of the last word variable and then to push underscores to it for the length of the new word.
var currentWordMatrix = [];

//Create an array to store the guessed letters. 
var lettersGuessedMatrix = [];

//Make an array containing all of the audio.   This made it easier for me to stop the music from the prior movie and start the current movie music so 
//I didn't have overlap of sounds. 

var audio = [];
audio.length = Movies.length;

for (var k = 0; k < Movies.length; k++) {
    audio[k] = new Audio(Movies[k].movieSound);
}

//Play initial sound.  I set it up to play the 20th century fox sound when the web page is opened. 
audio[0].play();


// Main Process 
// ==========================================================================================

  
//Set up the movie text, picture and sound to be for the last word that they just guessed.

document.querySelector("#movieText").innerHTML = Movies[movieIndex-1].movieText;
document.querySelector("#movieImage").innerHTML = '<img src= ' + Movies[movieIndex-1].moviePicture + '>';


for (var i = 0; i < Movies[movieIndex].movieName.length; i++)  {
    var blank = "_";
    currentWordMatrix.push(blank);}

//Join the currentWordMatrix entries together to make the currentWord string.  Also, make it lower case.
var currentWord = currentWordMatrix.join('');
var solutionWord = Movies[movieIndex].movieName;

//Push the current word to the screen
document.querySelector("#currentWord").innerHTML = currentWord;

//Start up the game 
runGame();
      

// Functions 
// ========================================================================================


function runGame() {
     
    //When user pushes a key, perform various functions. 
 
     document.onkeydown = function(event) {

        //Get rid of the "Press Any Key to Get Started" text since they are now started.
            document.querySelector("#startGame").innerHTML = "";
     
         //Converting the keyinput to lower case.  The game won't include upper case letters.
 
             var keyInput = event.key.toLowerCase(); 
           
            document.querySelector("#guessLetter").innerHTML = keyInput;
           
            document.querySelector("#guessesRemaining").innerHTML = x;
 
            document.querySelector("#wins").innerHTML = wins;
 
 
            //Check if the guessed letters matrix includes the key pushed, if not add it to the list.  I wanted the letters to be comma delimited for readability.
            
            if (lettersGuessedMatrix.includes(keyInput + ', ') === false) {
                lettersGuessedMatrix.push(keyInput + ', ');
             //reduce number of guesses remaining.
             x = x-1; 
            }
 
            var Guesses = lettersGuessedMatrix.join('');
            console.log(Guesses);

           document.querySelector("#guessedLetters").innerHTML = Guesses;
              
 
            //If the user guesses a letter that is contained in the solution word, then add it to the current word.  
            //Needed to cycle through the solution and compare what they guessed to each letter of the solution.  If they guessed a letter of the solution word, add it to 
            //the 'current word' that they are filling out.   Used the substring function to piece together the new current word with their correct key guess added in.

            for (var j=0; j < currentWord.length;j++) {
 
                if (solutionWord.charAt(j) === keyInput) {
                 newWord = currentWord.substring(0,(j)) + keyInput + currentWord.substring((j+1),length.currentWord);
                 currentWord = newWord;
                 document.querySelector("#currentWord").innerHTML = currentWord;
                } 
            }
 
             //reduce the allowable guesses count for each key strike.  If user goes below 0 it's a game over.
        
             if(x <= 0) {
                 audio[movieIndex].pause();
                 audio[movieIndex].currentTime = 0;
                 gameOver()
             }
            
     
             //Completely guessing a word will set up the next movie and increase the win count. 
            
            }


            //On key up, evaluate if a new movie needs loaded, or to load the victory sequence.  


             document.onkeyup = function(event) {
         
             if(currentWord === solutionWord && movieIndex !== Movies.length && game_over === false) {
                 nextMovie()  
             }
 
             if(currentWord === solutionWord && movieIndex === Movies.length) {
                 youWin()  
              }

        
 
 
 }

function reset() {

    // Reset necessary variables for wins counter, movies index, number of guesses etc.
//==========================================================================================

wins= 0;
movieIndex = 1;
x = 15;
game_over = false;

//Reset arrays.
currentWordMatrix = [];
lettersGuessedMatrix = [];

//Play initial sound.
audio[0].play();
  
//Reset image and text. 
document.querySelector("#movieText").innerHTML = Movies[movieIndex-1].movieText;
document.querySelector("#movieImage").innerHTML = '<img src= ' + Movies[movieIndex-1].moviePicture + '>';

//Reset 'Current' and 'Solution' words. 
   var blank;

       for (var i = 0; i < Movies[movieIndex].movieName.length; i++)  {
           blank = "_";
           currentWordMatrix.push(blank);
       }

currentWord = currentWordMatrix.join('');
solutionWord = Movies[movieIndex].movieName;


//Push the current word to the screen
document.querySelector("#currentWord").innerHTML = currentWord;

//Run game again now that everything is setup.
runGame();
}

function gameOver() {
   
//Stop last sound from playing
audio[movieIndex-1].pause();
audio[movieIndex-1].currentTime = 0;

//Play sound for game over, man.  Set game_over to true to inhibit user from being able to continue to next word.
var gameovermusic = new Audio(GameOver.Sound);
gameovermusic.play();
game_over = true;

//Set Game Over image and text on the screen.  
document.querySelector("#movieImage").innerHTML= '<img src= ' + GameOver.Picture + '>';
document.querySelector("#movieText").innerHTML = GameOver.Text + " You got " + wins + " out of " + (Movies.length-1) + " movies!  Press 'r' to restart";
document.querySelector("#currentWord").innerHTML = 'Game is Over';

//Set it up so they can reset the game by hitting the letter r on their keyboard.

document.onkeydown = function(event) {
       
  var keyInput = event.key.toLowerCase(); 
    if (keyInput === 'r') {
                gameovermusic.pause()
                gameovermusic.currentTime = 0;
                reset()
            }
    }
}

function youWin() {

//Stop the latest sound from running.
    audio[movieIndex-1].pause();
    audio[movieIndex-1].currentTime = 0;

//Run some victory music.
    var youwinaudio = new Audio(Victory.Sound);
    youwinaudio.play();

//Set game over to true so the user can't do more things.
    game_over = true;
//Give them a nice victory picture and message.
    document.querySelector("#movieImage").innerHTML= '<img src= ' + Victory.Picture + '>';
    document.querySelector("#movieText").innerHTML = Victory.Text + " You got " + wins + " out of " + (Movies.length-1) + " movies!  Press 'r' to restart";
    document.querySelector("#currentWord").innerHTML = 'You win!';

//Allow the user to restart and play the game again if they wish by hitting r on their keyboard.

    document.onkeydown = function(event) {

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

//Stop the last music to avoid annoying music overlay.
    audio[movieIndex-1].pause();
    audio[movieIndex-1].currentTime = 0;
    audio[movieIndex].play();

//movie index + 1, wins + 1 and reset remaining guesses, currentWord and solution word.  
    movieIndex++;
    wins++;
    x = 15;
    currentWordMatrix = [];
    lettersGuessedMatrix = [];

//Update wins on the screen.
    document.querySelector("#wins").innerHTML = wins;

//Set up the movie text, picture and sound to be for the last word that they just guessed.
    document.querySelector("#movieText").innerHTML = Movies[movieIndex-1].movieText;
    document.querySelector("#movieImage").innerHTML = '<img src= ' + Movies[movieIndex-1].moviePicture + '>';

//Reset the current word to be blanks so they can start guessing the next movie.
    for (var i = 0; i < Movies[movieIndex].movieName.length; i++)  {
        blank = "_";
           currentWordMatrix.push(blank);
       }
       currentWord = currentWordMatrix.join('');
       solutionWord = Movies[movieIndex].movieName;


//Push the current word to the screen
document.querySelector("#currentWord").innerHTML = currentWord;

}





   

   




















