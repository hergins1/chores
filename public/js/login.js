$(document).ready(function() {
  
  $("#signUpBttn").click(function () {
    window.location.href = './views/signup.handlebars';
    return false;
  });

  $("#logInBttn").on("click", function () {
    let email = $("#logInEmail").val().trim();
    let password = $("#logInPassword").val().trim();

  });

});

