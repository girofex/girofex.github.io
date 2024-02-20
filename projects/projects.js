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

function switchMode() {
    var bodyElement = document.body;
    bodyElement.classList.toggle("background-mode");
}