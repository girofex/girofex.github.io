//topButton
var topButton = document.querySelector(".top_button");
    
window.addEventListener("scroll", function () {
    var scrollHeight = window.scrollY;
    var scrollThreshold = 100;

    if (scrollHeight > scrollThreshold) {
        topButton.classList.add("visible");
    } else {
        topButton.classList.remove("visible");
    }
});

function GoTop() {
    const scroll = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scroll);
            window.scrollTo(0, c - c / 8);
        }
    };

    scroll();
}

//
//
//
//light and dark mode
var scrollbarTrackColor = "transparent";
var scrollbarThumbColor = "#44143C";
var scrollbarThumbBorderColor = "#DFD6D0";
document.documentElement.style.setProperty("--scrollbar-track-color", scrollbarTrackColor);
document.documentElement.style.setProperty("--scrollbar-thumb-color", scrollbarThumbColor);
document.documentElement.style.setProperty("--scrollbar-thumb-border-color", scrollbarThumbBorderColor);
var mode = document.getElementById("mode");
localStorage.setItem('theme', false);

var btn = document.querySelectorAll(".btn");

function switchMode() {
    //imgs and scrollbar
    var pin = document.getElementById("pin");
    var lang = document.getElementById("lang");
    var heart = document.getElementById("heart");
    var topButton = document.querySelector(".top_button");

    if(mode.src.includes("moon.png")){
        mode.src = "img/sun.png";
        localStorage.setItem('theme', true);

        pin.src = "img/dark pin.png";
        lang.src = "img/dark language.png";
        heart.src = "img/dark heart.png";
        topButton.src = "img/dark arrow.png";
        scrollbarThumbColor = "#C8E7FF";
        scrollbarThumbBorderColor = "#0F0F25";
    }else{
        mode.src = "img/moon.png";
        localStorage.setItem('theme', false);

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

    var dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("dropdown-mode");
    var dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.classList.toggle("dropdown-menu-mode");

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
}

//
//
//
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

//
//
//
//sound effect
var buttonSound = document.getElementById("raindrop");

btn.forEach(function(button) {
    button.addEventListener("click", function() {
        buttonSound.play();
    });
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