$(document).ready(function () {

  $("#signUpBttn").click(function () {
    window.location.href = './views/signup.handlebars';
    return false;
  });

  $("#logInBttn").on("click", function () {
    let email = $("#logInEmail").val().trim();
    let password = $("#logInPassword").val().trim();

    $.ajax("/api/households/" + email, {
      type: "GET",
    }).then(
      function() {
        if (email && password) {
          window.location.href = './views/.handlebars';
          return false;
        }
      }
    );
  });
});


