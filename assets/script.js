
var startBtn = document.querySelector("#start");
var answerArea = document.querySelector(".answerOptions");
var questionNumber = 0; 
var timerCount=60;
var counter; 
var submitBtn = document.querySelector(".submitBtn");

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
    counter=setInterval(startTimer, 1000); //1000 will  run it every 1 second
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
    $(".form-inline").css("display", "block");
    if (timerCount > 0){
      $(".quizArea").text("Your final score is " + timerCount + " ! Good job!"); 
    }
    else {
      $(".quizArea").text("You didn't score a single point.. ouch!"); 
    }
    
  }
  
  //not working - shows up for a split second and then goes away again - seems like it reloads the page 
  function nameToHighScore(){
    console.log("inside nametohighscore function");
  }  
  
  // all eventListeners 
  answerArea.addEventListener("click", checkAnswer); 
  startBtn.addEventListener("click", nextQuestion); 
  startBtn.addEventListener("click", startTimer); 
  submitBtn.addEventListener("click", nameToHighScore); 

