var linkedin = document.getElementById("linkedin");
var github = document.getElementById("github");
var btn = document.querySelectorAll(".btn");

var mode = document.getElementById("mode");
var themeMode = localStorage.getItem('theme');
var emoji = document.getElementById("me");

function switchMode() {
   var email = document.getElementById("email");

   if (mode.src.includes("moon.png")) {
      mode.src = "../img/sun.png";
      localStorage.setItem('theme', true);

      linkedin.src = "../img/dark linkedin.png";
      github.src = "../img/dark github.png";
      email.src = "../img/dark at.png";

      emoji.src = "../img/me3 black.mp4";
   } else {
      mode.src = "../img/moon.png";
      localStorage.setItem('theme', false);

      linkedin.src = "../img/light linkedin.png";
      github.src = "../img/light github.png";
      email.src = "../img/light at.png";

      emoji.src = "../img/me3 white.mp4";
   }

   //body
   var bodyElement = document.body;
   bodyElement.classList.toggle("background-mode");

   //navmenu
   var navbar = document.getElementById("nav");
   navbar.classList.toggle("nav_menu-mode");

   var dropdown = document.querySelector(".dropdown");
   dropdown.classList.toggle("dropdown-mode");
   var dropdownMenu = document.querySelector(".dropdown-menu");
   dropdownMenu.classList.toggle("dropdown-menu-mode");

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

if(themeMode == "true"){
   switchMode();
}

//
//
//
//sound effect
var buttonSound = new Audio();
buttonSound.src = "../raindrop.mp3";

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

//
//
//
//mp4
let videoPlayed = false;

window.addEventListener("scroll", function () {
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const startPlayingHeight = viewportHeight * 0.55;

    if(scrollPosition >= startPlayingHeight && !videoPlayed){
        emoji.play();
        videoPlayed = true;
    }
});

emoji.addEventListener("mouseenter", function() {
    emoji.play();
});

emoji.addEventListener("mouseleave", function() {
    if(emoji.ended)
        emoji.pause();
});

emoji.addEventListener("ended", function() {
    emoji.pause();
});