var linkedin = document.getElementById("linkedin");
var github = document.getElementById("github");
var btn = document.querySelectorAll(".btn");

var mode = document.getElementById("mode");
var themeMode = localStorage.getItem('theme');

function switchMode() {
   var email = document.getElementById("email");

   if (mode.src.includes("moon.png")) {
      mode.src = "../img/sun.png";
      themeMode == "true";

      linkedin.src = "../img/dark linkedin.png";
      github.src = "../img/dark github.png";
      email.src = "../img/dark at.png";
   } else {
      mode.src = "../img/moon.png";
      themeMode == "false";

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
var buttonSound = document.getElementById("raindrop");

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