const question = document.getElementsByClassName('question');
const title = document.getElementById("title");
var points = 0;
function start() {
    document.getElementById("welcome").style.display = "none";
    question[0].style.display = "block";
}
function right1() {
    question[0].style.display = "none";
    question[1].style.display = "block";
    points++;
}
function wrong1() {
    question[0].style.display = "none";
    question[1].style.display = "block";
}
function right2() {
    question[1].style.display = "none";
    question[2].style.display = "block";
    points++;
}
function wrong2() {
    question[1].style.display = "none";
    question[2].style.display = "block";
}
function right3() {
    question[2].style.display = "none";
    question[3].style.display = "block";
    points++;
}
function wrong3() {
    question[2].style.display = "none";
    question[3].style.display = "block";
}
function right4() {
    question[3].style.display = "none";
    question[4].style.display = "block";
    points++;
}
function wrong4() {
    question[3].style.display = "none";
    question[4].style.display = "block";
}
function right5() {
    question[4].style.display = "none";
    question[5].style.display = "block";
    points++;
}
function wrong5() {
    question[4].style.display = "none";
    question[5].style.display = "block";
}
function right6() {
    question[5].style.display = "none";
    question[6].style.display = "block";
    points++;
}
function wrong6() {
    question[5].style.display = "none";
    question[6].style.display = "block";
}
function right7() {
    question[6].style.display = "none";
    question[7].style.display = "block";
    points++;
}
function wrong7() {
    question[6].style.display = "none";
    question[7].style.display = "block";
}
function right8() {
    question[7].style.display = "none";
    question[8].style.display = "block";
    points++;
}
function wrong8() {
    question[7].style.display = "none";
    question[8].style.display = "block";
}
function right9() {
    question[8].style.display = "none";
    question[9].style.display = "block";
    points++;
}
function wrong9() {
    question[8].style.display = "none";
    question[9].style.display = "block";
}
function right10() {
    question[9].style.display = "none";
    document.getElementById("end").style.display = "block";
    points++;
    document.getElementById("points").innerHTML = points + " (" + points * 10 + "%)";
    if (points == 10) {
        title.innerHTML = "True Comrade";
    } else if (points == 9) {
        title.innerHTML = "Comrade";
    } else if (points == 8 || points == 7) {
        title.innerHTML = "History Nerd";
    } else if (points == 6 || points == 5) {
        title.innerHTML = "Uneducated Anti-Communist";
    } else if (points == 4 || points == 3) {
        title.innerHTML = "History Noob";
    } else {
        title.innerHTML = "Dumb, uneducated, dirty capitalist who will be sent to the Gulag";
    }
}
function wrong10() {
    question[9].style.display = "none";
    document.getElementById("end").style.display = "block";
    document.getElementById("points").innerHTML = points + " (" + points * 10 + "%)";
    if (points == 10) {
        title.innerHTML = "True Comrade";
    } else if (points == 9) {
        title.innerHTML = "Comrade";
    } else if (points == 8 || points == 7) {
        title.innerHTML = "History Nerd";
    } else if (points == 6 || points == 5) {
        title.innerHTML = "Uneducated Anti-Communist";
    } else if (points == 4 || points == 3) {
        title.innerHTML = "History Noob";
    } else {
        title.innerHTML = "Dumb, uneducated, dirty capitalist who will be sent to the Gulag";
    }
}