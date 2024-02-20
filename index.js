window.addEventListener("scroll", function() {
    var topButton = document.getElementById("top_button");
    var scrollHeight = window.scrollY;
    var scrollThreshold = 100;

    if (scrollHeight > scrollThreshold) {
        topButton.classList.add("visible");
    } else {
        topButton.classList.remove("visible");
    }
});

function GoTop(){
    const scroll = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0){
            window.requestAnimationFrame(scroll);
            window.scrollTo(0, c - c / 8);
        }
    };

    scroll();
}

function switchMode() {
    var mode = document.getElementById("mode");
    if(mode.src.includes("moon.png"))
        mode.src = "img/sun.png";
    else
        mode.src = "img/moon.png";

    var bodyElement = document.body;
    bodyElement.classList.toggle("background-mode");

    var about = document.getElementById("about");
    about.classList.toggle("about-mode");

    var footer = document.getElementById("footer");
    footer.classList.toggle("footer-mode");

    var topButton = document.getElementById("top_button");
    if(topButton.src.includes("light arrow.png"))
        topButton.src = "img/dark arrow.png";
    else
        topButton.src = "img/light arrow.png";
}

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