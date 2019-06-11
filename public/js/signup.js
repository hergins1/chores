$(document).ready(function() {
  $("#submitBttn").on("click", function() {
    event.preventDefault();
    let name = $("#userName").val().trim();
    let household = $("#houseName").val().trim();
    let email = $("#email").val().trim();
    let password = $("#password").val().trim();

    console.log(name);
    console.log(household);
    console.log(email);
    console.log(password);
    
    $.ajax("/api/households/create", {
      type: "POST"
    }).then(
      function(result) {
        console.log(result);
      }
    );
  });
});