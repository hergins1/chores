$(document).ready(function() {
  $("#submitBttn").on("click", function() {
    event.preventDefault();

    var householdInfo = {
      name: $("#userName")
        .val()
        .trim(),
      household: $("#houseName")
        .val()
        .trim(),
      email: $("#email")
        .val()
        .trim(),
      password: $("#password")
        .val()
        .trim()
    };

    // console.log(name);
    // console.log(household);
    // console.log(email);
    // console.log(password);
    $.ajax({
      type: "POST",
      url: "/api/households/create",
      data: householdInfo
    }).then(function(result) {
      console.log(result);
    });
  });
});
