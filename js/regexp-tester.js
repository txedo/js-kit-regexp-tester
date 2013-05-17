(function(){
  "use strict";

  var emailRe = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  var validationResult = document.querySelector("#emailValidation");
  var test = function(stringToTest) {
    if(emailRe.test(stringToTest)) {
      validationResult.innerText= "Success";
      validationResult.classList.remove("label-important");
      validationResult.classList.add("label-success");
    } else {
      validationResult.innerText = "Error";
      validationResult.classList.remove("label-success");
      validationResult.classList.add("label-important");
    }
  };

  var emailInput = document.querySelector("#email");
  emailInput.addEventListener("keyup", function(){
    test(this.value);
  });
}());