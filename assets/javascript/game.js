
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
var movieIndex = 0;


// Functions 
// ========================================================================================

//Function to set up the initial text and picture
function initialSetup() {
    document.querySelector("#movieText").innerHTML = Initial.movieText;
    document.querySelector("#movieImage").innerHTML = '<img src= ' + Initial.moviePicture + '>';
}

// Function that updates the number of wins...
function updateWins() { 
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}

function runGame() {
    for (var i = 1; i < Movies.length; i++) {
        
        document.querySelector("#movieText").innerHTML = Movies[i].movieText;
        document.querySelector("#movieImage").innerHTML = '<img src= ' + Movies[i].moviePicture + '>';
        var movieName = Movies[i].movieName;

    console.log(movieName);

}

}


// Main Process 
// ==========================================================================================

// Calling functions to start the game
initialSetup();
updateWins();



// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {

    //If there are still more movies, set up the next one.

    if (movieIndex <= (Movies.length-1)) {
        runGame();
    }

    else {
        document.querySelector("#movieText").innerHTML = "Game Over!";
        document.querySelector("#wins").innerHTML = "Congratulations, you got  " + wins + " out of " +Movies.length + "correct!";
    }

}










