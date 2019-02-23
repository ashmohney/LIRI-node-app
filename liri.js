// set environment variables
require("dotenv").config();
// all that is required 
const inquirer = require("inquirer");
const moment = require("moment");
const fs = require("fs");
const keys = require("./keys.js");                                  
const Spotify = require('node-spotify-api');
const axios = require("axios");     

//Modules?
// const omdbJs = require("./omdb.js");
// const bandsJs = require("./bands.js");
// const spotifyJs = require("./spotify.js");
// const logInfo = require("./log.js");

// setting variables as const_s
const omdbKey = keys.omdb.id;
      // console.log(keys.omdb.id);
const bandsKey = keys.bands.id;
      // console.log(keys.bands.id);
const spotify = new Spotify(keys.spotify);
      // console.log(keys.spotify);

const dashes = ("\n\n------------------------\n");   // helps log.txt data more readable

// appends date to log.txt
const appendData = function (data) {
    fs.appendFile("log.txt", JSON.stringify(data) + "\n", function (err) {
        if (err) {
            throw err;
        } 
        console.log("Updated: log.txt");
    });
  }


var request = ""; // for switch statement, determining User choice
var userInput = ""; // to get User input from Inquirer

// First interaction with User. It asks User to pick out next steps
function chooseFirst() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "request",
        message: "Hello. What would you like the LIRI-Bot to do today?",
        choices: ["Look up movie?", "Look up concert info?", "Look up song title?", "Just don't know? Try this."]
      }
    ])
    .then(answers => {
      request = answers.request;
      requestSwitch();
    });
} 

// ############# MOVIE Stuff ####################
function movieThis() {
  let url = "http://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + userInput;

  axios.get(url).then(function(response, err) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    let movie = response.data;
    let date = moment(movie.Released, "MM-DD-YYYY").format('LL');

    let movieInfo = ["\nTitle: " + movie.Title +
        "\nDate of release: " + date +
        "\nIMDB Rating: " + movie.Ratings[0].Value +
        "\nRotten Tomatoes Rating: " + movie.Ratings[1].Value +
        "\nCountry of Origin: " + movie.Country +
        "\nLanguage: " + movie.Language +
        "\nPlot: " + movie.Plot +
        "\nDirector: " + movie.Director +
        "\nActors: " + movie.Actors
    ];

      let cleanData = movieInfo + dashes;
      console.log("MOVIE: " + cleanData);
      appendData(cleanData);
  })
  .catch(function (error) {
      console.log(error); 
  })
}

// using Inquirer, ask the User to provide a movie title
function askMovieType() {      

  inquirer
  .prompt([
      {
      type: "input",
      name: "userInput",
      message: "Please provide a movie title."
      }
  ])
  .then(answers => {
      userInput = answers.userInput;
      movieThis();
      
  });

}

// ##################### BAND/CONCERT Stuff #############################
function concertThis() {
  let url = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=" + bandsKey;

  axios.get(url).then(function(response, err) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    
    let concert = response.data[0];
   
    var time = moment(concert.datetime).format('LLLL');
      
    let concertInfo = ["\nArtist: " + concert.lineup +
                "\nVenue: " + concert.venue.name +
                "\nLocation: " + concert.venue.city + ", " + concert.venue.country +
                "\nTime: " + time
            ];

      let cleanData = concertInfo + dashes;
      console.log("CONCERT: " + cleanData);
      appendData(cleanData);
  
  })
  .catch(function (error) {
      console.log(error); 
  })
}

// using Inquirer, ask the User to provide concert info
function askConcertInfo() {      

  inquirer
  .prompt([
      {
      type: "input",
      name: "userInput",
      message: "Please provide a band name to look up concert info."
      }
  ])
  .then(answers => {
      userInput = answers.userInput;
      concertThis();
      
  });
}
// ################## SPOTIFY Stuff  ##########################
function spotifyThis() {
  spotify.search({ type: 'track', query: userInput }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    let song = data.tracks.items[0];

    let songInfo = [
        "Song name: " + song.name +
        "\nArtist: " + song.artists[0].name +
        "\nAlbum name: " + song.album.name +
        "\nOn Spotify: " + song.external_urls.spotify
    ];

    let cleanData = "\n" + songInfo + dashes;

    console.log("SPOTIFY: " + cleanData);
    appendData(cleanData);
});
}
// using Inquirer, ask the User to provide song name
function askSpotifyInfo() {      

  inquirer
  .prompt([
      {
      type: "input",
      name: "userInput",
      message: "Please provide a song name."
      }
  ])
  .then(answers => {
      userInput = answers.userInput;
      spotifyThis();
      
  });
}
//################# DO WHAT IT SAYS ###################
function doWhatItSays() {
  fs.readFile('random.txt', 'utf8', function(error, data){
    if (!error) {

      let optionDo = data.split(",");
      request = optionDo[0].trim(" ");
      userInput = optionDo[1].trim(" ");

      // console.log(optionDo);
      spotifyThis();
      
    }
    
});
}

  // switch function based on User request
function requestSwitch() {
  switch(request) {
      case "Look up movie?":
          askMovieType(); 
          // console.log("I am a movie");
          break;
      case "Look up concert info?":
          askConcertInfo();
          // console.log("I am a concert");
          break;
      case "Look up song title?":
          askSpotifyInfo();
          // console.log("I am a song");
          break;
      case "Just don't know? Try this.":
          doWhatItSays();
          // console.log("I am a flux-capacitor");
          break;
  }
}
chooseFirst();






//BANDS let cleanData = eventInfo + dashes;
//          console.log(cleanData);
//          appendData(cleanData);
//           

//SPOTIFY let cleanData = "\n" + songInfo + dashes;
//          console.log(cleanData);
//          appendData(cleanData);
//         













// * `concert-this`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`


