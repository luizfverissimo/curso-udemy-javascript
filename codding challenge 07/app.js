(function () {
  //variables:
  //Armazena as questões criadas pelo constructor
  var questionsPool = [];
  //Armazena o número randômico da questão
  var randomNum;
  //Armazena a resposta gerada no prompt
  var response;

  //Constructor da questões:
  function Questions(question, answers1, answers2, answers3, correctAnswer) {
    this.question = question;
    this.answers = [answers1, answers2, answers3];
    this.correctAnswer = correctAnswer;
  }

  //Criação de questões
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
  function showQuestion() {
    randomNum = Math.floor(Math.random() * 3);
    console.log(questionsPool[randomNum].question);
    console.log(questionsPool[randomNum].answers[0]);
    console.log(questionsPool[randomNum].answers[1]);
    console.log(questionsPool[randomNum].answers[2]);
    //Resposta da pergunta
    response = prompt("Qual a sua resposta? ==digitar o valor==");
    //se digitar exit sai do jogo - se responder carrega a proxima questão
    if (response !== "exit") {
      compare();
    }
  }
  window.onload = showQuestion();

  //Compara o valor respondido com a resposta correta e gente a resposta
  function compare() {
    if (Number(response) === questionsPool[randomNum].correctAnswer) {
      result("right");
    } else {
      result("wrong");
    }
  }

  function result(result) {
    var score = 0;
    function scoreShow(x) {
      score += x;
      console.log(`Sua pontuação é de :${score}`);
      console.log("=========================================");
      showQuestion();
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
  }
})();
