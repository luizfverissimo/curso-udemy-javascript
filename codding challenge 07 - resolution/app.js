//Solução báscica:
/*
(function () {
  //function constructor
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  //question prototype
  Question.prototype.displayQuestions = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + " : " + this.answers[i]);
    }
  };

  //Criando questões
  var q1 = new Question(
    "Is JavaScript the coolest programming language in the wolrd?",
    ["yes", "no"],
    0
  );
  var q2 = new Question(
    "Whats the name of this course's teacher?",
    ["John", "Michael", "Jonas"],
    2
  );
  var q3 = new Question(
    "What does best describe coding?",
    ["Boring", "FUN", "Hard", "Tedious"],
    1
  );

  Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
      console.log("Correct Answer!");
    } else {
      console.log("Wrong answer! Try again!");
    }
  };

  //Armazena as questões no array
  var questions = [q1, q2, q3];

  //Gera o número randômico para mostrar.
  var n = Math.floor(Math.random() * questions.length);

  //Chama a função de mostrar as questões
  questions[n].displayQuestions();

  //parseInt() - Converte string to number
  var answer = parseInt(prompt("Please select the correct answer"));

  questions[n].checkAnswer(answer);
})();
*/

//Solução avançada
(function () {
  //function constructor
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  //question prototype
  Question.prototype.displayQuestions = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + " : " + this.answers[i]);
    }
  };

  //Criando questões
  var q1 = new Question(
    "Is JavaScript the coolest programming language in the wolrd?",
    ["yes", "no"],
    0
  );
  var q2 = new Question(
    "Whats the name of this course's teacher?",
    ["John", "Michael", "Jonas"],
    2
  );
  var q3 = new Question(
    "What does best describe coding?",
    ["Boring", "FUN", "Hard", "Tedious"],
    1
  );

  Question.prototype.checkAnswer = function (ans, callBack) {
    var sc

    if (ans === this.correct) {
      console.log("Correct Answer!");
      sc = callBack(true)
    } else {
      console.log("Wrong answer! Try again!");
      sc = callBack(false)
    }
    this.displayScore(sc)
  };

  Question.prototype.displayScore = function(score){
    console.log(`Your current score is: ${score}`)
    console.log('----------------------')
  }

  //Armazena as questões no array
  var questions = [q1, q2, q3];

  //score
  function score(){
    var sc = 0
    return function(correct){
      if(correct){
        sc++
      }
      return sc

    }
  }

var keepScore = score()

  function nextQuestion() {
    //Gera o número randômico para mostrar.
    var n = Math.floor(Math.random() * questions.length);

    //Chama a função de mostrar as questões
    questions[n].displayQuestions();

    var answer = prompt("Please select the correct answer");

    if (answer !== "exit") {
      questions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }

  nextQuestion();
})();
