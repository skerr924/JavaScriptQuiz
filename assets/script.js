var totalSeconds = 60;
var startBtn = document.querySelector(".btn-info");
var nextQuestionBtn = document.querySelector(".nextbtn");
var answerArea = document.querySelector(".answerOptions");

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
  function startQuiz() {
      //displays question number one 
      $(".questions").text(myQuestions[0].question); 
      $(".btn-info").css("display", "none");
      
      //loops through question options for question number one 
      for (i=0; i<4; i++) {
        var answer = (myQuestions[0].answers[i]);
        var answerBtn = $("<button>"); 
        answerBtn.addClass("answerOption");
        answerBtn.text(answer); 
        console.log(answer);
        $(".answerOptions").append(answerBtn);
        $(".answerOptions").append("<br>");
        
      }
   
  } 


  // function startTimer() {
  
  //   We only want the timer to run if totalSeconds is > 0
  //   if (totalSeconds > 0) {
  //     totalSeconds--; 
  //     So renderTime() is called here once every second.
  //     renderTime();
  //       }, 1000);
  //   } else {
  //     alert("Minutes of work/rest must be greater than 0.")
  //   }
  // }

  
  //all my called functions 
  startBtn.addEventListener("click", startQuiz);
