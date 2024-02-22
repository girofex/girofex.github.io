//light and dark mode
var scrollbarTrackColor = "transparent";
var scrollbarThumbColor = "#44143C";
var scrollbarThumbBorderColor = "#DFD6D0";
document.documentElement.style.setProperty("--scrollbar-track-color", scrollbarTrackColor);
document.documentElement.style.setProperty("--scrollbar-thumb-color", scrollbarThumbColor);
document.documentElement.style.setProperty("--scrollbar-thumb-border-color", scrollbarThumbBorderColor);
var btn = document.querySelectorAll(".btn");
var mode = document.getElementById("mode");

function switchMode() {
    //imgs and scrollbar
    var pin = document.getElementById("pin");
    var lang = document.getElementById("lang");
    var heart = document.getElementById("heart");
    var topButton = document.querySelector(".top_button");

    if(mode.src.includes("moon.png")){
        mode.src = "img/sun.png";
        pin.src = "img/dark pin.png";
        lang.src = "img/dark language.png";
        heart.src = "img/dark heart.png";
        topButton.src = "img/dark arrow.png";
        scrollbarThumbColor = "#C8E7FF";
        scrollbarThumbBorderColor = "#0F0F25";
    }else{
        mode.src = "img/moon.png";
        pin.src = "img/light pin.png";
        lang.src = "img/light language.png";
        heart.src = "img/light heart.png";
        topButton.src = "img/light arrow.png";
        scrollbarThumbColor = "#44143C";
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

    var name = document.querySelector(".name");
    name.classList.toggle("name-mode");

    //all btn
    btn.forEach(function(btn) {
        btn.classList.toggle("btn-mode");
    });

    //about box
    var about = document.querySelector(".about");
    about.classList.toggle("about-mode");

    //footer
    var footer = document.querySelector(".footer");
    footer.classList.toggle("footer-mode");

    var themeURL = mode.src;
    localStorage.setItem('theme', themeURL);
}

//automatic calculation of age
function calcYears(birthday) {
    var today = new Date();
    var bd = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
    var years = today.getFullYear() - birthday.getFullYear();

    if (today < bd){
        years--;
    }
    
    return years;
}

function updateYears(){
    var birthday = new Date("2001-09-03");
    var years = calcYears(birthday);
    document.getElementById("years").innerHTML = " " + years + " years old";
}

updateYears();

setInterval(updateYears, 86400000);

//sound effect
var buttonSound = document.getElementById("raindrop");
var meSound = document.getElementById("hello");
meSound.volume = 0.3;
var modeSound = document.getElementById("swoosh");
modeSound.playbackRate = 1.5;

btn.forEach(function(button) {
    button.addEventListener("click", function() {
        buttonSound.play();
    });
});

var me = document.getElementById("me");
me.addEventListener("click", function() {
    meSound.play();
});

mode.addEventListener("click", function() {
    modeSound.play();
});

function handleButtonClick(destination, openInNewWindow) {
    setTimeout(function() {
        if (openInNewWindow) {
            if(destination){
                window.open(destination, '_blank');
            }
        } else {
            window.location.href = destination;
        }
    }, 200);
}