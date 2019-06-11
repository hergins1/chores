$(document).on("click", "#task-card", function(event) {
  event.preventDefault();
  $(".modal").addClass("is-active");
});

$(".modal-close").on("click", function() {
  $(".modal").removeClass("is-active");
});

