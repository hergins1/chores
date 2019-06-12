// import { ENETDOWN } from "constants";

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
]

const avatars = [
  {
    name: "Erik",
    photo: "./images/avatars/erik.png"
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
]

$(document).on("click", "#task-card", function (event) {
  event.preventDefault();
  $(".modal").addClass("is-active");
});

$(document).on("click", "#newchore-icon", function (event) {
  event.preventDefault();
  $(".modal").addClass("is-active");  
  modalChore();
});

$(document).on("click", "#newAvatarButton", function (event) {
  event.preventDefault();
  $(".modal").addClass("is-active");  
  modalAvatar();
});

$(".modal-close").on("click", function () {
  $(".modal").removeClass("is-active");
});
