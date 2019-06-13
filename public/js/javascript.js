const icons = [
  {
    name: "bathroom",
    photo: "./images/chore-icons/bathroom.png"
  },
  {
    name: "bathtub",
    photo: "./images/chore-icons/bathtub.png"
  },
  {
    name: "broom",
    photo: "./images/chore-icons/broom.png"
  },
  {
    name: "broom-pan",
    photo: "./images/chore-icons/broom-pan.png"
  },
  {
    name: "dishes",
    photo: "./images/chore-icons/dishes.png"
  },
  {
    name: "dog",
    photo: "./images/chore-icons/dog.png"
  },
  {
    name: "dusting",
    photo: "./images/chore-icons/dusting.png"
  },
  {
    name: "fold",
    photo: "./images/chore-icons/fold.png"
  },
  {
    name: "handwash",
    photo: "./images/chore-icons/handwash.png"
  },
  {
    name: "laundry",
    photo: "./images/chore-icons/laundry.png"
  },
  {
    name: "mop-bucket",
    photo: "./images/chore-icons/mop-bucket.png"
  },
  {
    name: "mop-bucket2",
    photo: "./images/chore-icons/mop-bucket2.png"
  },
  {
    name: "mowing",
    photo: "./images/chore-icons/mowing.png"
  },
  {
    name: "recycle",
    photo: "./images/chore-icons/recycle.png"
  },
  {
    name: "scrubber",
    photo: "./images/chore-icons/scrubber.png"
  },
  {
    name: "toothbrush",
    photo: "./images/chore-icons/toothbrush.png"
  },
  {
    name: "trash",
    photo: "./images/chore-icons/trash.png"
  },
  {
    name: "vacuum",
    photo: "./images/chore-icons/vacuum.png"
  },
  {
    name: "wiping",
    photo: "./images/chore-icons/wiping.png"
  },
  {
    name: "iron",
    photo: "./images/chore-icons/iron.png"
  },
  {
    name: "TV",
    photo: "./images/chore-icons/TV.png"
  },
  {
    name: "sleep",
    photo: "./images/chore-icons/sleep.png"
  },
  {
    name: "junk-food",
    photo: "./images/chore-icons/junk-food.png"
  },
  {
    name: "play",
    photo: "./images/chore-icons/play.png"
  }
];

const avatars = [
  {
    name: "Byron",
    photo: "./images/avatars/byron.png"
  },
  {
    name: "Halle",
    photo: "./images/avatars/halle.png"
  },
  {
    name: "Shaun",
    photo: "./images/avatars/shaun.png"
  },
  {
    name: "Jessica",
    photo: "./images/avatars/jessica.png"
  },
  {
    name: "Tim",
    photo: "./images/avatars/tim.png"
  },
  {
    name: "Sari",
    photo: "./images/avatars/sari.png"
  },
  {
    name: "Erik",
    photo: "./images/avatars/erik.png"
  },
  {
    name: "Natalie",
    photo: "./images/avatars/natalie.png"
  },
  {
    name: "Jonathan",
    photo: "./images/avatars/jonathan.png"
  },
  {
    name: "Jason",
    photo: "./images/avatars/jason.png"
  },
  {
    name: "Josh",
    photo: "./images/avatars/josh.png"
  },
  {
    name: "Caleb",
    photo: "./images/avatars/caleb.png"
  },
  {
    name: "caitlin",
    photo: "./images/avatars/caitlin.png"
  }
];

$(document).on("click", "#task-card", function (event) {
  event.preventDefault();
  $(".modal").addClass("is-active");
});

$(document).on("click", "#newchore-button", function (event) {
  event.preventDefault();
  $(".modal").addClass("is-active");
  modalChore();
});

$(document).on("click", "#newavatar-button", function (event) {
  event.preventDefault();
  $(".modal").addClass("is-active");
  modalAvatar();
});

$(document).on("click", "#hamburger", function(event) {
  event.preventDefault();
  $(".navbar-menu").toggleClass("is-active");
});

$(document).on("click", "#chore-image", function(event) {
  event.preventDefault();
  let photo = $(this).attr("src");
  console.log(photo);
  let input = $("#inputPhoto");
  input
    .attr("value", photo);
  $(".modal").removeClass("is-active");
});

$(document).on("click", "#avatar-image", function(event) {
  event.preventDefault();
  let photo = $(this).attr("src");
  console.log(photo);
  let input = $("#inputAvatar");
  input
    .attr("value", photo);
  $(".modal").removeClass("is-active");
});

$("#icon-submit").on("click", function(event) {
  event.preventDefault();
  const chore = {
    name: $("#inputName").val().trim(),
    value: $("#inputValue").val().trim(),
    photo: $("#inputPhoto").val().trim()
  };
  console.log(chore.name);
  console.log(chore.value);
  console.log(chore.photo);
  $.ajax({
    type: "POST",
    url: "api/chores/create",
    data: chore
  }).then(function(result) {
    console.log(result);
  });
});

$("#avatar-submit").on("click", function(event) {
  event.preventDefault();
  const member = {
    name: $("#inputUser").val().trim(),
    age: $("#inputAge").val().trim(),
    admin: $("#inputAdmin").val().trim(),
    email: $("#inputEmail").val().trim(),
    password: $("#inputPassword").val().trim(),
    photo: $("#inputAvatar").val().trim()
  };
  console.log(member.name);
  console.log(member.age);
  console.log(member.admin);
  console.log(member.email);
  console.log(member.password);
  console.log(member.photo);
  $.ajax({
    type: "POST",
    url: "api/users/member",
    data: member
  }).then(function(result) {
    console.log(result);
  });
});

$(".modal-close").on("click", function () {
  $(".modal").removeClass("is-active");
});

function modalChore() {
  $("#newChoreIcon").empty();
  for (let i = 0; i < icons.length; i++) {
    const iconCard = $("<img>");
    iconCard
      .attr("src", icons[i].photo)
      .attr("id", "chore-image");
    $("#newChoreIcon").append(iconCard);
  }
};

function modalAvatar() {
  $("#newAvatar").empty();
  for (let i = 0; i < avatars.length; i++) {
    const iconCard = $("<img>");
    iconCard
      .attr("src", avatars[i].photo)
      .attr("id", "avatar-image");
    $("#newAvatar").append(iconCard);
  }
};

