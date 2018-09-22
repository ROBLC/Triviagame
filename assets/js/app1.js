var gameQuestions = {
    "q1": {
        q: "What disney movie was the first movie ever to release a soundtrack?",
        p1: "Dumbo",
        p2: "Fantasia",
        p3: "Cinderella",
        qa: "Snow White",
        message: "In 1944, Snow White became the first film to ever release a soundtrack",
        poster: "https://www.omdbapi.com/?t=snow+white&y=1937&apikey=trilogy"
    },
    "q2": {
        q: "What is disnye's shortest feature movie?",
        p1: "Cinderella",
        p2: "Bambi",
        p3: "Pinocchio",
        qa: "Dumbo",
        message: "Dumbo is only 64 minutes long!",
        poster: "https://www.omdbapi.com/?t=dumbo&apikey=trilogy"
    },
    "q3": {
        q: 'What was the first truly "Original" Disney Film?',
        p1: "Beauty and the Beast",
        p2: "Toy Story",
        p3: "Mulan",
        qa: "The Lion King",
        message: "The Lion King was the first Disney animated film to feature a completely original storyline—that is, one that was not an adaptation of a preexisting story",
        poster: "https://www.omdbapi.com/?t=Lion+King&apikey=trilogy"
    },
};
var qnum = 1;
var timer = 30;
var timerInterval;
var random = ["1", "2", "3", "4"];
var correctAnswers = 0;
var wrongAnswers;
var unanswered;