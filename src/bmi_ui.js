$(document).ready(function () {
  $('#calculate').click(function () {
    var w = parseFloat($('#weight').val());
    var h = parseFloat($('#height').val());
    var person = new Person({weight: w, height: h});
    person.calculate_bmi();
    $('#display_value').html('Your BMI is ' + person.bmiValue);
    $('#display_message').html('and you are '+ person.bmiMessage);
  });
  $('#calculate-imperial').click(function () {
    var w = parseFloat($('#weight_imperial').val());
    var h = parseFloat($('#height_imperial').val());
    var person = new Person({weight_imperial: w, height_imperial: h});
    person.calculate_imperial_bmi();
    $('#display_value_imperial').html('Your BMI is ' + person.bmiValueImperial);
    $('#display_message_imperial').html('and you are '+ person.bmiMessageImperial);
  });
});
