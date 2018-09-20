var gameQuestions = {
    "q1": {
        q: "What disney movie was the first movie ever to release a soundtrack?",
        p1: "Dumbo",
        p2: "Fantasia",
        p3: "Cinderella",
        qa: "Snow White",
        message: "In 1944, Snow White became the first film to ever release a soundtrack"  
    },
    "q2": {
        q: "What is disnye's shortest feature movie?",
        p1: "Cinderella",
        p2: "Bambi",
        p3:  "Pinocchio",
        qa: "Dumbo",
        message: "Dumbo is only 64 minutes long!"
    },
    "q3": {
        qt: 'What was the first truly "Original" Disney Film?',
        p1: "Beauty and the Beast",
        p2: "Toy Story",
        p3: "Mulan",
        qa: "The Lion King",
        message: "The Lion King was the first Disney animated film to feature a completely original storyline—that is, one that was not an adaptation of a preexisting story"
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
var qp;

function gameInterval(){
        clearInterval(timerInterval);
        timerInterval = setInterval(gameTimer, 1000); 
}
function gameTimer(){
    timer--;
    $("#time").text("Time remaining: "+timer+" seconds")
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
        random[randomIndex] = tempValue;
        console.log("currentIndex="+currentIndex);
        console.log("tempValue="+tempValue);
        console.log("randomIndex="+randomIndex);
        console.log("--------");
    }
    console.log(random);
}
function userPick() {
            $(".jumbotron").one("click", ".PA", function() {
                var pick = this.textContent;
                console.log(pick)
                if (pick === gameQuestions["q"+qnum].qa){
                    console.log("correct");
                }
                else {
                    console.log("wrong");
                }
            });
}

function gameloop() {
    gameInterval();
    shuffle();
    $("#question").text(gameQuestions["q"+qnum].q);
    $("#pa"+random[0]).text(gameQuestions["q"+qnum].qa);
    $("#pa"+random[1]).text(gameQuestions["q"+qnum].p1);
    $("#pa"+random[2]).text(gameQuestions["q"+qnum].p2);
    $("#pa"+random[3]).text(gameQuestions["q"+qnum].p3);
    userPick();
    if (timer < 1) {
        console.log("times up");
    }
 
    }


$("#start").on("click", function() {
    $("#start").css("display", "none");
    $("#time").css("display", "block");
    gameloop();
 
   
  
});
console.log(Math.floor(Math.random()*4));