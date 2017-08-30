function BMIImperialCalculator() {}

BMIImperialCalculator.prototype.imperial_bmi = function(obj) {
  var weight_imperial = obj.weight_imperial;
  var height_imperial = obj.height_imperial;
  if (weight_imperial > 0 && height_imperial > 0) {
    var finalBMI = weight_imperial * 703 / ((height_imperial * 12) * (height_imperial * 12));
    obj.bmiValueImperial = parseFloat(finalBMI.toFixed(2));
    setBMIMessageImperial(obj);
  }
};

function setBMIMessageImperial(obj) {
  if (obj.bmiValueImperial < 18.5) {
    obj.bmiMessageImperial = "Underweight";
  }
  if (obj.bmiValueImperial > 18.5 && obj.bmiValueImperial < 25) {
    obj.bmiMessageImperial = "Normal";
  }
  if (obj.bmiValueImperial > 25 && obj.bmiValueImperial < 30) {
    obj.bmiMessageImperial = "Overweight";
  }
  if (obj.bmiValueImperial > 30) {
    obj.bmiMessageImperial = "Obese";
  }
}
