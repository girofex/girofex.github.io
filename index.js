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