//light and dark mode
var scrollbarTrackColor = "#44143C";
var scrollbarThumbColor = "#772C53";
var scrollbarThumbBorderColor = "#DFD6D0";
document.documentElement.style.setProperty("--scrollbar-track-color", scrollbarTrackColor);
document.documentElement.style.setProperty("--scrollbar-thumb-color", scrollbarThumbColor);
document.documentElement.style.setProperty("--scrollbar-thumb-border-color", scrollbarThumbBorderColor);

function switchMode() {
   //imgs and scrollbar
   var mode = document.getElementById("mode");
   var linkedin = document.getElementById("linkedin");
   var github = document.getElementById("github");
   var email = document.getElementById("email");

   if (mode.src.includes("moon.png")) {
      mode.src = "../img/sun.png";
      linkedin.src = "../img/dark linkedin.png";
      github.src = "../img/dark github.png";
      email.src = "../img/dark at.png";
      scrollbarThumbColor = "#D0D1FF";
      scrollbarTrackColor = "#C8E7FF";
      scrollbarThumbBorderColor = "#0F0F25";
   } else {
      mode.src = "../img/moon.png";
      linkedin.src = "../img/light linkedin.png";
      github.src = "../img/light github.png";
      email.src = "../img/light at.png";
      scrollbarThumbColor = "#44143C";
      scrollbarTrackColor = "#772C53";
      scrollbarThumbBorderColor = "#DFD6D0";
   }

   document.documentElement.style.setProperty("--scrollbar-track-color", scrollbarTrackColor);
   document.documentElement.style.setProperty("--scrollbar-thumb-color", scrollbarThumbColor);
   document.documentElement.style.setProperty("--scrollbar-thumb-border-color", scrollbarThumbBorderColor);

   //body
   var bodyElement = document.body;
   bodyElement.classList.toggle("background-mode");

   //navmenu
   var navbar = document.getElementById("nav");
   navbar.classList.toggle("nav_menu-mode");

   var name = document.getElementById("name");
   name.classList.toggle("name-mode");

   //all btn
   var btn = document.getElementById("btn1");
   btn.classList.toggle("btn-mode");
   btn = document.getElementById("btn2");
   btn.classList.toggle("btn-mode");

   var btnA = document.getElementById("btn_a1");
   btnA.classList.toggle("btn_a-mode");
   btnA = document.getElementById("btn_a2");
   btnA.classList.toggle("btn_a-mode");

   //about box
   var contacts = document.getElementById("contacts");
   contacts.classList.toggle("contact_box-mode");

   //footer
   var footer = document.getElementById("footer");
   footer.classList.toggle("footer-mode");
}