let johnBills = [123, 48, 269, 87, 79, 460];
let tips = [];
let billsandtips = [];

window.onload = tipCalculator();

function tipCalculator() {
  for (let pos in johnBills) {
    if (johnBills[pos] < 50) {
      tips.push(johnBills[pos] * 0.2);
      billsandtips.push(tips[pos] + johnBills[pos]);
    } else if (johnBills[pos] >= 50 && johnBills[pos] <= 200) {
      tips.push(johnBills[pos] * 0.15);
      billsandtips.push(tips[pos] + johnBills[pos]);
    } else {
      tips.push(johnBills[pos] * 0.1);
      billsandtips.push(tips[pos] + johnBills[pos]);
    }
    console.log(
      `A conta com gorgeta do restaurante ${Number(pos) + 1} foi de $${billsandtips[pos]}, $${johnBills[pos]} da conta e $${parseFloat(tips[pos].toFixed(2))} de gorjeta.`
    );
  }
}
