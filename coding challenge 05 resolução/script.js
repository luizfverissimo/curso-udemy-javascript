let john = {
  billValues: [124, 48, 268, 180, 42],
  tips: [],
  total: [],
  calcTips: function () {
    let percent;
    for (let i = 0; i < this.billValues.length; i++) {
      let bill = this.billValues[i]; //Adicionando o código em uma variável faz com que escrevamos menos
      //Determina a porcentagem de gorgeta
      if (bill < 50) {
        percent = 0.2;
      } else if (bill >= 50 && bill <= 200) {
        percent = 0.15;
      } else {
        percent = 0.1;
      }
      //Add os valores das gorgetas e os valores totais (gorgeta + conta)
      this.tips.push(bill * percent);
      this.total.push(bill + this.tips[i]);
    }
  },
};

let mark = {
  billValues: [77, 475, 110, 45],
  tips: [],
  total: [],
  calcTips: function () {
    let percent;
    //Determina a porcentagem de gorgeta
    for (let i = 0; i < this.billValues.length; i++) {
      let bill = this.billValues[i]; //Adicionando o código em uma variável faz com que escrevamos menos
      if (bill < 100) {
        percent = 0.2;
      } else if (bill >= 100 && bill <= 300) {
        percent = 0.1;
      } else {
        percent = 0.25;
      }
      //Add os valores das gorgetas e os valores totais (gorgeta + conta)
      this.tips.push(bill * percent);
      this.total.push(bill + this.tips[i]);
    }
  },
};

//Calcula a média das gorgetas de cada família e compara a família que deu mais gorjeta
function calcAverage(tips) {
  let sum = 0;
  for (let i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

if (john.average > mark.average) {
  console.log(
    `A família de John pagou a maior quantidade de gorgetas, com uma média de ${john.average} dolares!`
  );
} else if (mark.average > john.average) {
  console.log(
    `A família de Mark pagou a maior quantidade de gorgetas, com uma média de ${mark.average} dolares!`
  );
}
