describe("BMIImperialcalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
    person = new Person({
      weight_imperial: 198,
      height_imperial: 6.1
    });
    calculator = new BMIImperialCalculator();
  });

  it("calculates BMI for a person using imperial method", function() {
    calculator.imperial_bmi(person);
    //person.calculate_imperial_bmi();
    expect(person.bmiValueImperial).toEqual(25.98);
  });
});
