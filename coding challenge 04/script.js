var mark = {
  fullName: "Mark Ruffalo",
  height: 1.95,
  mass: 92,
  calcIMC: function () {
    this.IMC = this.mass / (this.height ^ 2);
  },
};

var john = {
  fullName: "John Smith",
  height: 1.6,
  mass: 150,
  calcIMC: function () {
    this.IMC = this.mass / (this.height ^ 2);
  },
};

mark.calcIMC();
john.calcIMC();

if (john.IMC > mark.IMC) {
  console.log(
    `${john.fullName} tem o maior IMC (${john.IMC}) do que ${mark.fullName}(${mark.IMC}).`
  );
} else if (john.IMC < mark.IMC) {
  console.log(
    `${mark.fullName} tem o maior IMC (${mark.IMC}) do que ${john.fullName}(${john.IMC}).`
  );
} else {
  console.log("Ambos possuem o mesmo IMC.");
}
