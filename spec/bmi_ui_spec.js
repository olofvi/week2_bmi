describe('BMI_UI - index.html', function(){
    beforeEach(function(){
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('index.html');
      $.holdReady(false);
    });
    describe('Metric', function(){
      beforeEach(function() {
        $('#weight').val('90');
        $('#height').val('186');
        $('#calculate').trigger('click');
      });

      it("displays BMI Value", function() {
        expect($('#display_value').text()).toBe('Your BMI is 26.01');
      });

      it("displays BMI Message", function() {
        expect($('#display_message').text()).toBe('and you are Overweight');
      });

    });


    describe('Imperial', function(){
      beforeEach(function() {
        $('#weight_imperial').val('198');
        $('#height_imperial').val('6.1');
        $('#calculate-imperial').trigger('click');
      });

      it("displays BMI Value imperial", function() {
        expect($('#display_value_imperial').text()).toBe('Your BMI is 25.98');
      });

      it("displays BMI Message imperial", function() {
        expect($('#display_message_imperial').text()).toBe('and you are Overweight');
      });

    });
});
