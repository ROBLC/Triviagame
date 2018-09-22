var gameQuestions = {
    "q1": {
        q: "What disney movie was the first movie ever to release a soundtrack?",
        p1: "Dumbo",
        p2: "Fantasia",
        p3: "Cinderella",
        qa: "Snow White",
        message: "In 1944, Snow White became the first film to ever release a soundtrack",
        poster: "https://m.media-amazon.com/images/M/MV5BMTQwMzE2Mzc4M15BMl5BanBnXkFtZTcwMTE4NTc1Nw@@._V1_SX300.jpg"
    },
    "q2": {
        q: "What is disney's shortest feature movie?",
        p1: "Cinderella",
        p2: "Bambi",
        p3: "Pinocchio",
        qa: "Dumbo",
        message: "Dumbo is only 64 minutes long!",
        poster: "https://m.media-amazon.com/images/M/MV5BZDIzYjJjNmItZmY5Yy00NjRiLTkyMDYtODg2MGFjYmQzYWI5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    "q3": {
        q: 'What was the first truly "Original" Disney Film?',
        p1: "Beauty and the Beast",
        p2: "Toy Story",
        p3: "Mulan",
        qa: "The Lion King",
        message: "The Lion King was the first Disney animated film to feature a completely original storyline—that is, one that was not an adaptation of a preexisting story",
        poster: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg"
    },
    "q4": {
        q: "What Disney animated movie was the first to be directed by a woman?",
        p1: "Brave",
        p2: "Moana",
        p3: "Coco",
        qa: "Frozen",
        message: "Frozen is the first animated Disney film directed by a woman",
        poster: "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg"
    },
    "q5": {
        q: "What Disney character is named after Walt Disney?",
        p1: "Woody",
        p2: "Micky Mouse",
        p3: "Mufasa",
        qa: "Wall-E",
        message: "The Disney character WALL-E is named after Walt Disney. (Walter Elias Disney.)",
        poster: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg"
    },
    "q6": {
        q: "Which of these is a famous Pixar easter egg?",
        p1: "115",
        p2: "G-115",
        p3: "P113",
        qa: "A-113",
        message: "The Disney character WALL-E is named after Walt Disney. (Walter Elias Disney.)",
        poster: "http://cineastas.mx/wp-content/uploads/2017/06/disney.jpg"
    },
    "q7": {
        q: "Which glass slipper did Cinderella leave behind at the ball?",
        p1: "None",
        p2: "Both",
        p3: "Right",
        qa: "Left",
        message: "Her left slipper!",
        poster: "https://img.buzzfeed.com/buzzfeed-static/static/2014-10/8/14/tmp/webdr08/025c010f8b19526ac0ca31b19ae0b031-4.jpg?downsize=715:*&output-format=auto&output-quality=auto"
    },
    "q8": {
        q: "On whose shoulders does Dopey stand on in order to dance with Snow White during “The Silly Song” scene?",
        p1: "Doc",
        p2: "Grumpy",
        p3: "Sneezy",
        qa: "Happy",
        message: "It's on Sneezy´s shoulders!",
        poster: "https://img.buzzfeed.com/buzzfeed-static/static/2014-10/8/16/tmp/webdr07/f545a8d048476607ebd7e9a2e89a064c-13.jpg?downsize=715:*&output-format=auto&output-quality=auto"
    },
    "q9": {
        q: "Which disney princess is the only one to have hazel eyes?",
        p1: "Ariel",
        p2: "Merida",
        p3: "Tiana",
        qa: "Belle",
        message: "Belle is the only Disney princess with hazel eyes.",
        poster: "http://images5.fanpop.com/image/articles/135000/disney-princess_135526_9.jpg?cache=1322512012"
    },
    "q10": {
        q: "What does the matchmaker criticize Mulan for?",
        p1: "Being to tall",
        p2: "having big feet",
        p3: "Having bad posture",
        qa: "Being to skinny",
        message: "it´s Mulan being to skinny for marriage",
        poster: "https://img.buzzfeed.com/buzzfeed-static/static/2014-10/8/18/tmp/webdr07/664bc2c8031e3994090e47c5d1d018de-14.jpg?downsize=715:*&output-format=auto&output-quality=auto"
    },


};

//Create timer function to run on questions
// Create functions for when user clicks an answer 
//Timeout function for when time runs out 
//

var qnum = 1;
var timer = 20;
var timerInterval;
var random = ["1", "2", "3", "4"];
var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
function gameInterval() {
    stop();
    timer = 20;
    $("#time").text("Time remaining: " + timer + " seconds")
    timerInterval = setInterval(gameTimer, 1000);
    function gameTimer() {
        if (timer < 1) {
            stop();
            timeUp();
        }
        else {
            timer--;
            $("#time").text("Time remaining: " + timer + " seconds")
        }

    }
}


function shuffle() {
    var currentIndex = random.length;
    var tempValue;
    var randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        tempValue = random[currentIndex];
        random[currentIndex] = random[randomIndex];
        random[randomIndex] = tempValue
    }
    console.log(random);
}
function stop() {
    clearInterval(timerInterval)
}
function reset() {
    $("#message").css("display", "none");
    $(".PA").css("display", "block");
    $("#moviePoster").css({ display: "none", width: "0", height: "0" });
    $(".end").css("display", "none");
    $("#question").css("display", "block");
}
function timeUp() {
    if (timer === 0) {
        stop();
        $("#message").css("display", "block")
        $(".PA").css("display", "none")
        $("#question").text("Time's up!!");
        $("#message").text(gameQuestions["q" + qnum].message);
        $("#moviePoster").css({ display: "initial", width: "200px", height: "225px" });
        $("#pa1").text("");
        $("#pa2").text("");
        $("#pa3").text("");
        $("#pa4").text("");
        qnum++;
        unanswered++;
        setTimeout(function () {
            reset();
            nextQuestion();
        }, 5000);
    }
}
function pickCorrect() {
    $("#message").css("display", "block")
    $(".PA").css("display", "none")
    $("#question").text("That's correct!!");
    $("#message").text(gameQuestions["q" + qnum].message);
    $("#moviePoster").css({ display: "initial", width: "200px", height: "225px" });
    $("#pa1").text("");
    $("#pa2").text("");
    $("#pa3").text("");
    $("#pa4").text("");
    setTimeout(function () {
        reset();
        nextQuestion();
    }, 5000);
    qnum++;
    correctAnswers++;
}

function pickWrong() {
    $("#message").css("display", "block")
    $(".PA").css("display", "none")
    $("#question").text("That's wrong!!");
    $("#message").text(gameQuestions["q" + qnum].message);
    $("#moviePoster").css({ display: "initial", width: "200px", height: "225px" });
    $("#pa1").text("");
    $("#pa2").text("");
    $("#pa3").text("");
    $("#pa4").text("");
    setTimeout(function () {
        reset();
        nextQuestion();
    }, 5000);
    qnum++;
    wrongAnswers++;
}
function endGame() {
    stop();
    $("#message").css("display", "initial")
    $("#question").css("display", "none")
    $("#message").text("You finished, here's how you did");
    $(".end").css("display", "initial");
    $(".PA").css("display", "none");
    $("#correct").text("Correct answers: " + correctAnswers);
    $("#wrong").text("Wrong answers: " + wrongAnswers);
    $("#unanswered").text("Unanswered: " + unanswered);
    $("#time").css("display", "none");
    $("#playAgain").on("click", function () {
        $("#start").css("display", "none");
        $("#time").css("display", "block");
        qnum = 1;
        correctAnswers = 0;
        wrongAnswers = 0;
        unanswered = 0;
        reset();
        nextQuestion();
    });
}
function nextQuestion() {
    if (qnum < 11) {
        time = 20;
        shuffle();
        questionContent();
        gameInterval();
        timeUp();
        getPoster();
    }
    else {
        endGame();
    }
}
function getPoster() {
    $("#moviePoster").attr("src", gameQuestions["q" + qnum].poster);

}
function questionContent() {
    $("#moviePoster").css("display", "none")
    $("#question").text(gameQuestions["q" + qnum].q);
    $("#pa" + random[0]).text(gameQuestions["q" + qnum].qa);
    $("#pa" + random[1]).text(gameQuestions["q" + qnum].p1);
    $("#pa" + random[2]).text(gameQuestions["q" + qnum].p2);
    $("#pa" + random[3]).text(gameQuestions["q" + qnum].p3);
}
$("#start").on("click", function () {
    $("#start").css("display", "none");
    $("#time").css("display", "block");
    reset();
    nextQuestion();
});
$(".jumbotron").on("click", ".PA", function () {
    var pick = this.textContent;
    if (pick === gameQuestions["q" + qnum].qa) {
        stop();
        pickCorrect();
    }
    else if (pick !== gameQuestions["q" + qnum].qa) {
        stop();
        pickWrong();
    }

});
