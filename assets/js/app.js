var gameQuestions = {
    "q1": {
        q: "What disney movie was the first movie ever to release a soundtrack",
        p1: "Dumbo",
        p2: "Fantasia",
        p3: "Cinderella",
        qa: "Snow White",
        message: "In 1944, Snow White became the first film to ever release a soundtrack"  
    },
    "q2": {
        q: "What is disnye's shortest feature movie",
        p1: "Cinderella",
        p2: "Bambi",
        p3:  "Pinocchio",
        qa: "Dumbo",
        message: "Dumbo is only 64 minutes long!"
    },
    "q3": {
        qt: 'What was the first truly "Original" Disney Film',
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

$("#start").on("click", function() {
    $("#start").css("display", "none");
    gameloop();
  
});

function gameloop() {
    var currentq = "gameQuestion.q"+qnum+".q";

    $("#question").text(gameQuestions["q"+qnum].q);

    console.log(gameQuestions["q"+qnum].q);

    }
function currentquestion(){
    $
}

console.log(gameQuestions.q1)