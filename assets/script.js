var startBtn = document.querySelector("#start");
var answerArea = $(".answerOptions");
var questionNumber = 0; 
var timerCount=60;
var counter; 
var names = [];
var submitBtn = document.querySelector(".submitBtn");
var nameInput = document.querySelector("#name-text");
var highScoreForm = document.querySelector(".highScoreForm");
var highScoreList = document.querySelector("#highScoreList");
var finalScore; 
var counter; 


var myQuestions = [
  {
    question: "Which does JavaScript work with to create interactive webpages online?",
    answers: [
      "HTML and CSS",
      "CSS and JQuery",
      "HTML only",
      "HTML and your local computer files"
    ],
    correctAnswer: "HTML and CSS"
  },
  {
    question: "Conditions of an if statement are surrounded on either side by: ",
    answers: [
      "Curly braces { }",
      "Brackets [ ]",
      "Parentheses ( )",
      'Quotation marks " "'
    ],
    correctAnswer: "Parentheses ( )"
  },
  {
    question: "Any information stored on the Local Directory lives where?",
    answers: [
      "It depends on where the central database is geographically located",
      "The browser memory",
      "The hardrive of the user",
      "It is not stored anywhere"
    ],
    correctAnswer: "The browser memory"
  },
  {
      question: "Learning JavaScript is",
      answers: [
        "Fun",
        "Occassionally confusing",
        "Worth it!",
        "All of the above"
      ],
      correctAnswer: "All of the above"
    }
];


//for loop which runs through each question and displays the questions and answers
function nextQuestion() {

    //loops through question options for question number one 
    if (questionNumber < myQuestions.length){
      for (i=0; i<4; i++) {
        $(".questions").text(myQuestions[questionNumber].question); 
        $(".questions").append("<br><br>");
        $(".btn-info").css("display", "none");
        var answer = (myQuestions[questionNumber].answers[i]);
        var answerBtn = $("<button>");
        answerBtn.text(answer); 
        answerBtn.addClass("btn btn-sm btn-outline-dark answerBtn");
        $(".answerOptions").append(answerBtn);
        $(".answerOptions").append("<br><br>"); 
      }
    }
    else {
      displayFinalScreen();
    }
    questionNumber++;
} 

function checkAnswer(){
  var questionClicked = questionNumber - 1; 
    if ($(this).text() !== myQuestions[questionClicked].correctAnswer){
      timerCount= timerCount-5;
  }
  clearAnswers();
  nextQuestion();
   
}

function startTimer() {
  counter = setInterval(decrementTime, 1000);
}

function decrementTime() {
  timerCount = timerCount - 1;
  $('.timer').text('You have ' + timerCount + ' seconds remaining');
  if (timerCount <= 0) {
    clearInterval(counter);
  }
}


function clearAnswers(){
  $(".answerOptions").empty();
}

function displayFinalScreen(){ 
  finalScore = timerCount;
  $(".form-inline").css("display", "block");
  if (timerCount > 0){
    $(".quizArea").text("Your final score is " + finalScore + " ! Good job!"); 
  }
  else {
    $(".quizArea").text("You didn't score a single point.. ouch!"); 
  }
  renderHighScores();
}
  
function renderHighScores(){
      highScoreList.innerHTML = "";
    
      // Render a new li for each high score name 
      for (var i = 0; i < names.length; i++) {
        var name = names[i];

        var li = document.createElement("li");
        li.textContent = name;
        li.setAttribute("data-index", i);
        highScoreList.appendChild(li);
  }

  }

  function getStoredNames() {
    // Get stored names from localStorage
    // Parsing the JSON string to an object
    var storedNames = JSON.parse(localStorage.getItem("names"));
   
    // If names were retrieved from localStorage, update the names array to it
    if (storedNames !== null) {
      names = storedNames;
    }
    // Render names to the DOM
    renderHighScores();
  }

  function storeNames() {
    // Stringify and set "names" key in localStorage to names array
    localStorage.setItem("names", JSON.stringify(names));
  }
  
    // all eventListeners 
  highScoreForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var nameText = nameInput.value.trim() + " with a score of " + finalScore;
  
    // Return from function early if submitted nameText is blank
    if (nameText === "") {
      return;
    }
  
    // Add new nameText to names array, clear the input
    names.push(nameText);
    nameInput.value = "";
  
    // Store updated todos in localStorage, re-render the list
    storeNames();
    renderHighScores();
  });

  answerArea.on("click", ".answerBtn", checkAnswer);
  startBtn.addEventListener("click", nextQuestion); 
  startBtn.addEventListener("click", startTimer); 
