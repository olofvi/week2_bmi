describe("BMIImperialcalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
    person = new Person({
      weight: 198,
      height: 6.1
    });
    calculator = new BMIImperialCalculator();
  });

  it("calculates BMI for a person using imperial method", function() {
    calculator.imperial_bmi(person);
    expect(person.bmiValue).toEqual(26.12);
  });
});
