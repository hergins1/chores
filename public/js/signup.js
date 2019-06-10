$(document).ready(function() {
  $("#submitBttn").on("click", function() {
    let name = $("#userName").val().trim();
    let household = $("#houseName").val().trim();
    let email = $("#email").val().trim();
    let pasword = $("#password").val().trim();

    $.ajax("/api/households" + email, {
      type: "POST"
    }).then(
      function() {
        //???
      }
    );
  });
});