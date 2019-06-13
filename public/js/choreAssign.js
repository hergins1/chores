$(document).ready(function() {
  $("#user-select").on("change", function() {
    event.preventDefault();
    $.ajax({
      url: "/api/use/chore/assign",
      method: "POST",
      data: {
        choreId: choreId,
        UserId: "#user-input".val()
      }
    }).then(function(response) {
      console.log(response);
    });
  });
});
