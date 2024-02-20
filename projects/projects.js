//topButton
window.addEventListener("scroll", function () {
    var topButton = document.getElementById("top_button");
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
var scrollbarTrackColor = "#44143C";
var scrollbarThumbColor = "#772C53";
var scrollbarThumbBorderColor = "#DFD6D0";
document.documentElement.style.setProperty("--scrollbar-track-color", scrollbarTrackColor);
document.documentElement.style.setProperty("--scrollbar-thumb-color", scrollbarThumbColor);
document.documentElement.style.setProperty("--scrollbar-thumb-border-color", scrollbarThumbBorderColor);

function switchMode() {
    //imgs and scrollbar
    var mode = document.getElementById("mode");
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
        scrollbarThumbColor = "#D0D1FF";
        scrollbarTrackColor = "#C8E7FF";
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
    btnA = document.getElementById("btn_a3");
    btnA.classList.toggle("btn_a-mode");
    btnA = document.getElementById("btn_a4");
    btnA.classList.toggle("btn_a-mode");

    //about box
    var projects = document.getElementById("project1");
    projects.classList.toggle("project_box-mode");
    projects = document.getElementById("project2");
    projects.classList.toggle("project_box-mode");

    //footer
    var footer = document.getElementById("footer");
    footer.classList.toggle("footer-mode");
}