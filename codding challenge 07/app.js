(function () {
  //Constructor da questões:
  function Questions(question, answers1, answers2, answers3, correctAnswer) {
    this.question = question;
    this.answers = [answers1, answers2, answers3];
    this.correctAnswer = correctAnswer;
  }
  //Armazena as questões criadas pelo constructor
  var questionsPool = [];

  //criação de questões
  questionsPool.push(
    new Questions(
      "Qual o nome minha mãe?",
      "0 - Maria",
      "1 - Rose",
      "2 - Roseli",
      2
    )
  );
  questionsPool.push(
    new Questions(
      "Qual o nome do meu pai?",
      "0 - Luiz",
      "1 - Carlos",
      "2 - João",
      0
    )
  );
  questionsPool.push(
    new Questions(
      "Qual o nome do meu gato vivo?",
      "0 - Miuxa",
      "1 - Madame",
      "2 - Gatão",
      1
    )
  );

  //Seleção de uma questão randomica de questões
  var randomNum = Math.floor(Math.random() * 3);
  console.log(questionsPool[randomNum].question);
  console.log(questionsPool[randomNum].answers[0]);
  console.log(questionsPool[randomNum].answers[1]);
  console.log(questionsPool[randomNum].answers[2]);

  //Resposta da pergunta
  var response = prompt("Qual a sua resposta? ==digitar o valor==");

  //Init
  init()
  function init() {
    if (response === "exit") {
      return false;
    } else {
      return true;
    }
  }

  //Compara o valor respondido com a resposta correta e gente a resposta
  function compare() {
    if (init) {
      if (Number(response) === questionsPool[randomNum].correctAnswer) {
        result("right");
      } else {
        result("wrong");
      }
    }
  }

  function result(result) {
    var score = 0;
    function scoreShow(x) {
      score += x;
      console.log(`Sua pontuação é de :${score}`);
      console.log("=========================================");
    }

    if (result === "right") {
      console.log(`*.*.* Parabéns! você acertou a questão! *.*.*`);
      scoreShow(1);
    } else {
      console.log(
        `Você errou a questão! A resposta correta é ${
          questionsPool[randomNum].answers[
            questionsPool[randomNum].correctAnswer
          ]
        }`
      );
      scoreShow(0);
    }
    compare()
  }
})();
