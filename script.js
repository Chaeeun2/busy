function setClock() {
    $(document).ready(function () {
        var _hour = $(".hour");
        var _min = $(".min");
        var _sec = $(".sec");
        var _year = $(".year");
        var _month = $(".month");
        var _date = $(".date");

        var dateinfo = new Date();
        var hour = dateinfo.getHours();
        var min = dateinfo.getMinutes();
        var sec = dateinfo.getSeconds();
        var year = dateinfo.getFullYear();
        var month = dateinfo.getMonth() + 1;
        var date = dateinfo.getDate();

        _hour.html(hour);
        _min.html(min);
        _sec.html(sec);
        _year.html(year);
        _month.html(month);
        _date.html(date);
    })
}

function setClock2() {
    $(document).ready(function () {
        var _hour = $(".hour");
        var _min = $(".min");
        var _sec = $(".sec");
        var _year = $(".year");
        var _month = $(".month");
        var _date = $(".date");

        var dateinfo = new Date();
        var hour = dateinfo.getHours();
        var min = dateinfo.getMinutes();
        var sec = dateinfo.getSeconds();
        var year = dateinfo.getFullYear();
        var month = dateinfo.getMonth() + 1;
        var date = dateinfo.getDate();

        _hour.html(hour + "시");
        _min.html(min + "분");
        _sec.html(sec + "초");
        _year.html(year + "년");
        _month.html(month + "월");
        _date.html(date + "일");
    })
}

function randomlefttop() {
    $(".number").each(function () {
        var randomleft = Math.random() * 80;
        var randomtop = Math.random() * 75;
        var randomrotate = Math.round(Math.random() * 360) + "deg";
        /* i의 style 중 left값을 랜덤값으로 지정 -> css를 사용하지 않고 style을 사용해서 각각 따로 스타일 들어가게 함 */
        $(this).css({ "left": randomleft + "vw", "top": randomtop + "vh", "transform": "rotate(" + randomrotate + ")" })
    })
}

function randomcolor() {
    var _r = Math.random() * 255;
    var _g = Math.random() * 255;
    var _b = Math.random() * 255;

    $(".body").css({
        "background": "rgba(" + _r + "," + _g + "," + _b + ")"
    })
}

function fontweight() {
    var _number = document.querySelector("number");
    var dateinfo = new Date();
    var sec = dateinfo.getSeconds();
    var secweight = sec * 11 + 100;
    var secwidth = sec + 75;
    var secsize = 5 + sec / 3 + "em";

    console.log(secweight);
    document.getElementById("year").style.setProperty('--weight', `${secweight}`);
    document.getElementById("month").style.setProperty('--weight', `${secweight}`);
    document.getElementById("date").style.setProperty('--weight', `${secweight}`);
    document.getElementById("hour").style.setProperty('--weight', `${secweight}`);
    document.getElementById("min").style.setProperty('--weight', `${secweight}`);
    document.getElementById("sec").style.setProperty('--weight', `${secweight}`);

    document.getElementById("year").style.setProperty('--width', `${secwidth}`);
    document.getElementById("month").style.setProperty('--width', `${secwidth}`);
    document.getElementById("date").style.setProperty('--width', `${secwidth}`);
    document.getElementById("hour").style.setProperty('--width', `${secwidth}`);
    document.getElementById("min").style.setProperty('--width', `${secwidth}`);
    document.getElementById("sec").style.setProperty('--width', `${secwidth}`);

    document.getElementById("year").style.setProperty('font-size', `${secsize}`);
    document.getElementById("month").style.setProperty('font-size', `${secsize}`);
    document.getElementById("date").style.setProperty('font-size', `${secsize}`);
    document.getElementById("hour").style.setProperty('font-size', `${secsize}`);
    document.getElementById("min").style.setProperty('font-size', `${secsize}`);
    document.getElementById("sec").style.setProperty('font-size', `${secsize}`);
}

function fontweight2() {
    var dateinfo = new Date();
    var sec = dateinfo.getSeconds();
    var secweight = sec * 11 + 100;
    var secwidth = sec + 75;

    console.log(secweight);
    document.getElementById("year").style.setProperty('--weight', `${secweight}`);
    document.getElementById("month").style.setProperty('--weight', `${secweight}`);
    document.getElementById("date").style.setProperty('--weight', `${secweight}`);
    document.getElementById("hour").style.setProperty('--weight', `${secweight}`);
    document.getElementById("min").style.setProperty('--weight', `${secweight}`);
    document.getElementById("sec").style.setProperty('--weight', `${secweight}`);

    document.getElementById("year").style.setProperty('--width', `${secwidth}`);
    document.getElementById("month").style.setProperty('--width', `${secwidth}`);
    document.getElementById("date").style.setProperty('--width', `${secwidth}`);
    document.getElementById("hour").style.setProperty('--width', `${secwidth}`);
    document.getElementById("min").style.setProperty('--width', `${secwidth}`);
    document.getElementById("sec").style.setProperty('--width', `${secwidth}`);
}


function _circle() {
    let i = document.createElement('div')
    /* 만든 div의 클래스를 type으로 지정 */
    i.setAttribute('class', 'circle')

    /* maxleft값을 #txt의 너비에서 .type의 너비를 뺀 값으로 설정 -> 그 안에서 랜덤한 값을 ramdomleft에 지정 */
    var randomleft = Math.random() * 100;
    /* i의 style 중 left값을 랜덤값으로 지정 -> css를 사용하지 않고 style을 사용해서 각각 따로 스타일 들어가게 함 */
    i.style.left = randomleft + "vw";

    document.getElementById('clock').appendChild(i);

    setTimeout(function () {
        i.remove();
    }, 20000);
}

function _circle2() {
    let i = document.createElement('div')
    /* 만든 div의 클래스를 type으로 지정 */
    i.setAttribute('class', 'circle2')

    /* maxleft값을 #txt의 너비에서 .type의 너비를 뺀 값으로 설정 -> 그 안에서 랜덤한 값을 ramdomleft에 지정 */
    var randomleft = Math.random() * 100;
    /* i의 style 중 left값을 랜덤값으로 지정 -> css를 사용하지 않고 style을 사용해서 각각 따로 스타일 들어가게 함 */
    i.style.left = randomleft + "vw";

    document.getElementById('clock').appendChild(i);
}


window.onload = function () {
    $(".go").hide();

    setClock();
    fontweight();
    randomlefttop();
    randomcolor()
    _circle();
    var interval1 = setInterval(setClock, 1000);
    var interval2 = setInterval(fontweight, 1000);
    var interval3 = setInterval(randomlefttop, 1000);
    var interval4 = setInterval(randomcolor, 1000);
    var interval5 = setInterval(setClock2, 1000);
    var interval6 = setInterval(fontweight2, 1000);
    var interval7 = setInterval(_circle, 1000);
    var interval8 = setInterval(_circle2, 1000);

    clearInterval(interval5);
    clearInterval(interval6);
    clearInterval(interval8);

    $(".stop").click(function () {
        $(".stop").hide();
        $(".go").show();

        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
        clearInterval(interval4);
        clearInterval(interval7);

        setClock2();
        fontweight2();
        _circle2();

        interval5 = setInterval(setClock2, 1000);
        interval6 = setInterval(fontweight2, 1000);
        interval8 = setInterval(_circle2, 1000);

        $(".number").each(function () {
            $(this).css({ "position": "static", "font-size": "5em", "background": "white", "color": "black", "transform": "rotate(0deg)" })
        })

        $(".body").css({ "background": "black" })

        $(".clock").css({ "display": "flex", "justify-content": "center", "align-items": "center" })
    })

    $(".go").click(function () {
        $(".circle2").remove();
        clearInterval(interval5);
        clearInterval(interval6);
        clearInterval(interval8);

        $(".stop").show();
        $(".go").hide();

        setClock();
        fontweight();
        randomlefttop();
        randomcolor()
        _circle();
        interval1 = setInterval(setClock, 1000);
        interval2 = setInterval(fontweight, 1000);
        interval3 = setInterval(randomlefttop, 1000);
        interval4 = setInterval(randomcolor, 1000);
        interval7 = setInterval(_circle, 1000);

        $(".number").each(function () {
            $(this).css({ "position": "absolute", "background": "black", "color": "white" })
        })
    })

}