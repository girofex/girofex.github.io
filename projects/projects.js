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

//light and dark mode
var scrollbarTrackColor = "transparent";
var scrollbarThumbColor = "#44143C";
var scrollbarThumbBorderColor = "#DFD6D0";
document.documentElement.style.setProperty("--scrollbar-track-color", scrollbarTrackColor);
document.documentElement.style.setProperty("--scrollbar-thumb-color", scrollbarThumbColor);
document.documentElement.style.setProperty("--scrollbar-thumb-border-color", scrollbarThumbBorderColor);
var mode = document.getElementById("mode");
var btn = document.querySelectorAll(".btn");
var projectBox = document.querySelectorAll(".project_box");

function switchMode() {
    var wolf = document.getElementById("wolf");
    var ball = document.getElementById("ball");
    var php = document.getElementById("php");
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");

    if (mode.src.includes("moon.png")) {
        mode.src = "../img/sun.png";
        wolf.src = "../img/dark wolf.png";
        ball.src = "../img/dark ball.png";
        php.src = "../img/dark php.png";
        html.src = "../img/dark html.png";
        css.src = "../img/dark css.png";
        js.src = "../img/dark js.png";
        scrollbarThumbColor = "#C8E7FF";
        scrollbarThumbBorderColor = "#0F0F25";
    } else {
        mode.src = "../img/moon.png";
        wolf.src = "../img/light wolf.png";
        ball.src = "../img/light ball.png";
        php.src = "../img/light php.png";
        html.src = "../img/light html.png";
        css.src = "../img/light css.png";
        js.src = "../img/light js.png";
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

    projectBox.forEach(function(projectBox) {
        projectBox.classList.toggle("project_box-mode");
    })

    //footer
    var footer = document.querySelector(".footer");
    footer.classList.toggle("footer-mode");
}

//hover animation

var wolf = document.getElementById("wolf");
var ball = document.getElementById("ball");
var php = document.getElementById("php");
var html = document.getElementById("html");
var css = document.getElementById("css");
var js = document.getElementById("js");

projectBox[0].addEventListener("mouseenter", function() {
    if (mode.src.includes("moon.png")) {
        wolf.src = "../img/dark wolf.png";
    }
})

projectBox[0].addEventListener("mouseleave", function() {
    if (mode.src.includes("moon.png")) {
        wolf.src = "../img/light wolf.png";
        ball.src = "../img/light ball.png";
        php.src = "../img/light php.png";
        html.src = "../img/light html.png";
        css.src = "../img/light css.png";
        js.src = "../img/light js.png";
    }
})

projectBox[1].addEventListener("mouseenter", function() {
    if (mode.src.includes("moon.png")) {
        ball.src = "../img/dark ball.png";
        php.src = "../img/dark php.png";
        html.src = "../img/dark html.png";
        css.src = "../img/dark css.png";
        js.src = "../img/dark js.png";
    }
})

projectBox[1].addEventListener("mouseleave", function() {
    if (mode.src.includes("moon.png")) {
        ball.src = "../img/light ball.png";
        php.src = "../img/light php.png";
        html.src = "../img/light html.png";
        css.src = "../img/light css.png";
        js.src = "../img/light js.png";
    }
})

//sound effect
var buttonSound = document.getElementById("raindrop");

btn.forEach(function(button) {
    button.addEventListener("click", function() {
        buttonSound.play();
    });
});

projectBox.forEach(function(button) {
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