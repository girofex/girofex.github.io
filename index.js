//light and dark mode
var scrollbarTrackColor = "transparent";
var scrollbarThumbColor = "#44143C";
var scrollbarThumbBorderColor = "#DFD6D0";
document.documentElement.style.setProperty("--scrollbar-track-color", scrollbarTrackColor);
document.documentElement.style.setProperty("--scrollbar-thumb-color", scrollbarThumbColor);
document.documentElement.style.setProperty("--scrollbar-thumb-border-color", scrollbarThumbBorderColor);

function switchMode() {
    //imgs and scrollbar
    var mode = document.getElementById("mode");
    var pin = document.getElementById("pin");
    var lang = document.getElementById("lang");
    var heart = document.getElementById("heart");
    var topButton = document.getElementById("top");

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

    var name = document.getElementById("name");
    name.classList.toggle("name-mode");

    //all btn
    var btn = document.getElementById("btn1");
    btn.classList.toggle("btn-mode");
    btn = document.getElementById("btn2");
    btn.classList.toggle("btn-mode");
    btn = document.getElementById("btn3");
    btn.classList.toggle("btn-mode");
    btn = document.getElementById("btn4");
    btn.classList.toggle("btn-mode");

    var btnA = document.getElementById("btn_a1");
    btnA.classList.toggle("btn_a-mode");
    btnA = document.getElementById("btn_a2");
    btnA.classList.toggle("btn_a-mode");
    btnA = document.getElementById("btn_a3");
    btnA.classList.toggle("btn_a-mode");
    btnA = document.getElementById("btn_a4");
    btnA.classList.toggle("btn_a-mode");

    //about box
    var about = document.getElementById("about");
    about.classList.toggle("about-mode");

    //footer
    var footer = document.getElementById("footer");
    footer.classList.toggle("footer-mode");
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