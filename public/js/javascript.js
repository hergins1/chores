$(document).on("click", "#task-card", function(event) {
  event.preventDefault();
  $(".modal").addClass("is-active");
});

$(".modal-close").on("click", function() {
  $(".modal").removeClass("is-active");
});
<<<<<<< HEAD
=======

>>>>>>> f7d91192d60105c1d3bbb30853f00128dddf79c1
