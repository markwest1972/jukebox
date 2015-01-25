var five = require("johnny-five");
var songs = require('j5-songs');

five.Board().on("ready", function() {

  // Setup Buzzer and Buttons
  var piezo = new five.Piezo(9);
  var buttonA = new five.Button(2);
  var buttonB = new five.Button(3);
  var buttonC = new five.Button(4);

  // Setup Songs
  var songA = songs.load('never-gonna-give-you-up');
  var songB = songs.load('starwars-theme');
  var songC = songs.load('beethovens-fifth');

  buttonA.on("up", function(value){
    console.log("Playing Rick Astley....");
    piezo.play(songA);
  });

  buttonB.on("up", function(value){
    console.log("Playing Starwars Theme....");
    piezo.play(songB);
  });

  buttonC.on("up", function(value){
    console.log("Playing Beethovens Fifth....");
    piezo.play(songC);
  });
});
