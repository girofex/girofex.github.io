var linkedin = document.getElementById("linkedin");
var github = document.getElementById("github");
var btn = document.querySelectorAll(".btn");
var mode = document.getElementById("mode");

function switchMode() {
   var email = document.getElementById("email");

   if (mode.src.includes("moon.png")) {
      mode.src = "../img/sun.png";
      linkedin.src = "../img/dark linkedin.png";
      github.src = "../img/dark github.png";
      email.src = "../img/dark at.png";
   } else {
      mode.src = "../img/moon.png";
      linkedin.src = "../img/light linkedin.png";
      github.src = "../img/light github.png";
      email.src = "../img/light at.png";
   }

   //body
   var bodyElement = document.body;
   bodyElement.classList.toggle("background-mode");

   //navmenu
   var navbar = document.getElementById("nav");
   navbar.classList.toggle("nav_menu-mode");

   var name = document.querySelector(".name");
   name.classList.toggle("name-mode");

   //all btn
   btn.forEach(function (btn) {
      btn.classList.toggle("btn-mode");
   });

   //about box
   var contacts = document.querySelector(".contact_box");
   contacts.classList.toggle("contact_box-mode");

   //footer
   var footer = document.querySelector(".footer");
   footer.classList.toggle("footer-mode");
}

//sound effect
var buttonSound = document.getElementById("raindrop");
var meSound = document.getElementById("tell");
meSound.volume = 0.3;
var modeSound = document.getElementById("swoosh");
modeSound.playbackRate = 1.5;

btn.forEach(function (button) {
   button.addEventListener("click", function () {
      buttonSound.play();
   });
});

linkedin.addEventListener("click", function () {
   buttonSound.play();
});

github.addEventListener("click", function () {
   buttonSound.play();
});

var me = document.getElementById("me");
me.addEventListener("click", function() {
    meSound.play();
});

mode.addEventListener("click", function() {
   modeSound.play();
});

function handleButtonClick(destination, openInNewWindow) {
   setTimeout(function () {
      if (openInNewWindow) {
         if (destination) {
            window.open(destination, '_blank');
         }
      } else {
         window.location.href = destination;
      }
   }, 200);
}