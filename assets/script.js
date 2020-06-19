
var startBtn = document.querySelector(".btn-info");
var answerArea = document.querySelector(".answerOptions");
var questionNumber = 0; 
var timerCount=60;
var counter=setInterval(startTimer, 1000); //1000 will  run it every 1 second

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
          answerBtn.addClass("btn btn-sm btn-outline-dark");
          answerBtn.text(answer); 
          $(".answerOptions").append(answerBtn);
          $(".answerOptions").append("<br><br>"); //is there a better way to do this? I tried addng it to the line above, didn't work
        }
        questionNumber++;
      }
      else {
        displayFinalScreen();
      }
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
    timerCount=timerCount-1;
    $(".timer").text("You have " + timerCount + " seconds remaining");
    if (timerCount <= 0)
    {
       clearInterval(counter);
       //counter ended, show end screen 
    }
  }

  function clearAnswers(){
    $(".answerOptions").empty();
  };

  function displayFinalScreen(){ 
    clearAnswers();
    $(".timer").empty(); //this isn't working yet 
    $(".questions").empty();
    if (timerCount > 0){
      $(".questions").text("Your final score is " + timerCount + " ! Good job!"); 
    }
    else {
      $(".questions").text("You didn't score a single point.. ouch!"); 
    }
  }

  
  // all eventListeners 
  answerArea.addEventListener("click", checkAnswer); //need to change to jquery 
  startBtn.addEventListener("click", nextQuestion); //need to change to jquery 
  startBtn.addEventListener("click", startTimer); //this is starting on hover, not on click, why??