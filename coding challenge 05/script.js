let john = {
  billValues: [124, 48, 268, 180, 42],
  tips: [],
  total: [],
  calcTips: function () {
    let percent;
    for (let i = 0; i < this.billValues.length; i++) {
      //Determina a porcentagem de gorgeta
      if (this.billValues[i] < 50) {
        percent = 0.2;
      } else if (this.billValues[i] >= 50 && this.billValues[i] <= 200) {
        percent = 0.15;
      } else {
        percent = 0.1;
      }
      //Add os valores das gorgetas e os valores totais (gorgeta + conta)
      this.tips.push(this.billValues[i] * percent);
      this.total.push(this.billValues[i] + this.tips[i]);
    }
  },
};

let mark = {
  billValues: [77, 375, 110, 45],
  tips: [],
  total: [],
  calcTips: function () {
    let percent;
    //Determina a porcentagem de gorgeta
    for (let i = 0; i < this.billValues.length; i++) {
      if (this.billValues[i] < 100) {
        percent = 0.2;
      } else if (this.billValues[i] >= 50 && this.billValues[i] <= 300) {
        percent = 0.1;
      } else {
        percent = 0.25;
      }
      //Add os valores das gorgetas e os valores totais (gorgeta + conta)
      this.tips.push(this.billValues[i] * percent);
      this.total.push(this.billValues[i] + this.tips[i]);
    }
  },
};

john.calcTips();
mark.calcTips();
let tipsJohn = 0;
let tipsMark = 0;
let meanJohn, meanMark;

//Calcula a média das gorgetas de cada família e compara a família que deu mais gorjeta
window.onload = totalTips();
function totalTips() {
  for (let pos = 0; pos < john.tips.length; pos++) {
    tipsJohn += john.tips[pos];
    meanJohn = tipsJohn / john.tips.length;
  }
  for (let pos = 0; pos < mark.tips.length; pos++) {
    tipsMark += mark.tips[pos];
    meanMark = tipsMark / mark.tips.length;
  }
  if (meanMark > meanJohn) {
    console.log(
      `Família de Mark gastou mais em gorjetas que a Família de John, gastaram um total de $${meanMark}`
    );
  } else if (meanMark < meanJohn) {
    console.log(
      `Família de John gastou mais em gorjetas que a Família de Mark, gastaram um total de $${meanJohn}`
    );
  } else {
    console.log(`Ambas famílias gastaram a mesma quantia em gorgetas`);
  }
}
