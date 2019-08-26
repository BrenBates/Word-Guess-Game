
var Initial= {
    "movieText" : "Can you guess the movie?",
    "moviePicture" : "assets/images/movies.jpg",
    "movieSound" : "/assets/mp3/CenturyFox.mp3"
};

var Braveheart= {
    "movieText" : "Playing: Braveheart Theme Song",
    "moviePicture" : "assets/images/Braveheart.jpg",
    "movieSound" : "assets/mp3/Braveheart.mp3"
};


var Deadpool= {
    "movieText" : "Playing: X Gon' Give It To Ya by DMX",
    "moviePicture" : "assets/images/Deadpool.jpg",
    "movieSound" : "assets/mp3/DMXXGonnaGiveToYa.mp3"
};


var Titanic= {
    "movieText" : "Playing: My Heart Will Go On by Celine Dion ",
    "moviePicture" : "assets/images/Titanic.jpg",
    "movieSound" : "assets/mp3/MyHeartWillGoOn.mp3"
};

var Jaws= {
    "movieText" : "Playing: Jaws Theme",
    "moviePicture" : "assets/images/Jaws.jpg",
    "movieSound" : "assets/mp3/JawsTheme.mp3"
};

var Movies = [Braveheart, Deadpool, Titanic, Jaws];

var wins= 0;
var guessIndex = 0;

// Functions 
// ========================================================================================

//Function to set up the initial text and picture
function initialSetup() {
    document.querySelector("#movieText").innerHTML = Initial.movieText;
    document.querySelector("#movieImage").innerHTML = '<img src= ' + Initial.moviePicture + '>';
    Initial.movieSound.Play()
}


// Function to render movies for guessing

function renderMovie() {
    // If there are still more movies, render the next one. 

    if (guessIndex <= (Movies.length - 1)) {
        document.querySelector("#movie").innerHTML = Movies[guessIndex];
    }

    //If there are no more movies, render the end game screen.

    else {
        document.querySelector("#movie").innerHTML = "Game Over!";
        document.querySelector("#wins").innerHTML = "Congratulations, you got " + wins + " out of " + Movies.length + "correct!";
    }

}

// Function that updates the number of wins...
function updateWins() { 
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}

function updateMovieInfo() {
    document.querySelector("#movieText").innerHTML = Movies[1].movieText;
    document.querySelector("#movieImage").innerHTML = '<img src= ' + Movies[1].moviePicture + '>';
}


// Main Process 
// ==========================================================================================

// Calling functions to start the game
initialSetup();
updateWins();




console.log(Braveheart.movieText);
console.log(Movies);

