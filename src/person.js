function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  this.weight_imperial = attr.weight_imperial;
  this.height_imperial = attr.height_imperial;
}

Person.prototype.calculate_bmi = function () {
  calculator = new BMIcalculator();
  calculator.metric_bmi(this);
};

Person.prototype.calculate_imperial_bmi = function () {
  calculator = new BMIImperialCalculator();
  calculator.imperial_bmi(this);
};
