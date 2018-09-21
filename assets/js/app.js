var gameQuestions = {
    "q1": {
        q: "What disney movie was the first movie ever to release a soundtrack?",
        p1: "Dumbo",
        p2: "Fantasia",
        p3: "Cinderella",
        qa: "Snow White",
        message: "In 1944, Snow White became the first film to ever release a soundtrack",
        poster:  "https://www.omdbapi.com/?t=snow+white&y=1937&apikey=trilogy"
    },
    "q2": {
        q: "What is disnye's shortest feature movie?",
        p1: "Cinderella",
        p2: "Bambi",
        p3:  "Pinocchio",
        qa: "Dumbo",
        message: "Dumbo is only 64 minutes long!",
        poster:  "https://www.omdbapi.com/?t=dumbo&apikey=trilogy"
    },
    "q3": {
        q: 'What was the first truly "Original" Disney Film?',
        p1: "Beauty and the Beast",
        p2: "Toy Story",
        p3: "Mulan",
        qa: "The Lion King",
        message: "The Lion King was the first Disney animated film to feature a completely original storyline—that is, one that was not an adaptation of a preexisting story",
        poster:  "https://www.omdbapi.com/?t=Lion+King&apikey=trilogy"
    },
};

//Create timer function to run on questions
// Create functions for when user clicks an answer 
//Timeout function for when time runs out 
// 
var qnum = 1;
var timer = 30;
var timerInterval;
var random = ["1","2","3","4"];
var correctAnswers = 0;
var wrongAnswers;
var unanswered;
function gameInterval(){
        stop();
        timer =30;
        $("#time").text("Time remaining: "+timer+" seconds")
        timerInterval = setInterval(gameTimer, 1000); 
}
function gameTimer(){
    timer--;
    $("#time").text("Time remaining: "+timer+" seconds")
    if (timer === 0) {
        stop();
        console.log("times up");
    }
}
function shuffle() {
    var currentIndex = random.length;
    var tempValue;
    var randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -= 1;
        tempValue = random[currentIndex];
        random[currentIndex] =random[randomIndex];
        random[randomIndex] = tempValue
    }
    console.log(random);
}
function userPick() {
            $(".jumbotron").one("click", ".PA", function() {
                var pick = this.textContent;
                console.log(pick)
              
                    if (pick === gameQuestions["q"+qnum].qa){
                    stop();
                    $("#message").css("display", "block")
                    $(".PA").css("display", "none")
                    $("#question").text("That is correct!!");
                    $("#message").text(gameQuestions["q"+qnum].message);
                    console.log(gameQuestions["q"+qnum].message);
                    $("#pa1").text("");
                    $("#pa2").text("");
                    $("#pa3").text("");
                    $("#pa4").text("");
                    $.ajax({
                        url: gameQuestions["q"+qnum].poster,
                        method: "GET"
                      }).then(function(response) {
                        movie = response;
                        console.log(movie);
                        $("#moviePoster").attr("src", movie.Poster);
                        $("#moviePoster").css({display: "initial", width: "150px", height: "225px"});
                      });

                    setTimeout  (function() {
                    qnum++;
                    correctAnswers++;
                      console.log(qnum);
                        reset();
                        gameloop();
                  }, 2000);
                    console.log("correct");
                }
                    else {
                    console.log("wrong");
                }
              
               
            });
}
function stop() {
    clearInterval(timerInterval)
}

function gameloop() {
    reset();
    gameInterval();
    shuffle();
    if (qnum === 4) {
        stop();
        $("#message").css("display", "initial")
        $("#question").css("display", "none")
        $("#message").text("You finished, here's how you did");
        $(".end").css("display", "initial");
        $("#pa1").text("");
        $("#pa2").text("");
        $("#pa3").text("");
        $("#pa4").text("");
        $("#correct").text("Correct answers: "+correctAnswers);
        $("#wrong").text("Wrong answers: "+wrongAnswers);
        $("#unanswered").text("Correct answers: "+unanswered);
        $("#time").css("display", "none");
        $("#playAgain").on("click", function() {
            $("#start").css("display", "none");
            $("#time").css("display", "block");
            qnum=1;
            gameloop();
            console.log("hi");
        });
        

    }
    else {
        $("#moviePoster").css("display", "none")
        $("#question").text(gameQuestions["q"+qnum].q);
        $("#pa"+random[0]).text(gameQuestions["q"+qnum].qa);
        $("#pa"+random[1]).text(gameQuestions["q"+qnum].p1);
        $("#pa"+random[2]).text(gameQuestions["q"+qnum].p2);
        $("#pa"+random[3]).text(gameQuestions["q"+qnum].p3);
        userPick();
    }
}   
function reset(){
    $("#message").css("display", "none");
    $(".PA").css("display", "block");
    $("#moviePoster").css({display: "none", width: "0", height: "0"});
    $(".end").css("display", "none");


}


$("#start").on("click", function() {
    $("#start").css("display", "none");
    $("#time").css("display", "block");
    gameloop();
 
   
  
});
