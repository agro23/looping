$(document).ready(function() {

var sentence = "";
$("#theGame").hide();

  function processSentence(ourWords){
    // clone ourWords;
    // turn dashes on in clone

    // initialize variables
    var x = 0;
    var test = "";
    var newWord = newSentence = "";

      newSent = ourWords.split(" "); // should turn neSent in to an array of words
      newSent.forEach (function (word){
          x = word.length;
          for (i = 0; i< x; i++) {
            test = word.charAt(i);  // look at one character at a time
            test = test.toUpperCase();  //change the character to upper case, check once not twice
            console.log("test = " + test);
            if ( ( test === "A" ) || (test ==="E") || (test==="I") || (test === "O") || (test === "U") ) {
              newWord = newWord + "-";  // if a vowel, then dash
            } else {
              newWord = newWord + word.charAt(i); //return back to original case
            }
          } // now we have a whole newWord
          newSentence = newSentence + newWord + " "; //rebuilding the new sentence with dashes
          newWord = "";  //remove the newWord to start fresh
        }
      ); // now newSentence has dashes
    return newSentence;
  }

  function askGuesses(){
    $("#theGame").show();
  }

  function checkAnswer(anAnswer){
    if (anAnswer === sentence) {
      alert("YOU GOT IT!!!");
      var temp = prompt("Want to play again?");
      if (temp.toUpperCase() === "Y" || temp.toUpperCase() === "Yes") {
        location.reload(); // refresh the page
      } else {
        // make a bye page
        var bye = "<div class='container well'><div class='jumbotron'><h1>Okay then, bye!</h1></div></div>";
        $(".aGame").empty;
        $(".aGame").replaceWith(bye);
        $
      }
    }
    else {
      alert("Nope! Guess again!");
    }
  }

  function sentenceHTML(aSentence){
    ourHTML = "<br><div class='panel panel-default'><h2>" + aSentence + "</h2></div>";
    return ourHTML;
  }

  function displaySentence(theWords, where){
    $("#"+where).append(theWords);
    $("#"+where).show(); // show the new sentence at the form ID title
  }

  $("form#sentence").submit(function(e) {
    e.preventDefault();
    // MAIN GAME
    sentence = $("#ourSentence").val(); // get the form value from the user for a starting sentence.
    gameSentence = processSentence(sentence); // get the sentence with dashes
    $("#sentence").hide(); // hide the original form that is called at ID sentence
    displaySentence(sentenceHTML(gameSentence), "newSentence"); // creates new data appends to the #game form
    askGuesses(); // begin asking for a guess
  });

  $(".button2").click(function(e) {
    e.preventDefault();
    var userAnswer = $("#guessSentence").val();
    checkAnswer(userAnswer);
  });
});
