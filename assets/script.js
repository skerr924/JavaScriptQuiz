var totalSeconds = 60;

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