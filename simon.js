let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btn = document.querySelectorAll("button");
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started..!");
        started = true;

        levelup();
    }

});
function gameflash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove("gameflash");
    }, 250);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}
let higheshscore = 0;
function levelup() {
    console.log(`Highest Score : ${level}`)
    userseq = [];
    level++;


    h2.innerText = `level ${level}`;

    let randomind = Math.floor(Math.random() * 3);
    let randomcolor = btns[randomind];
    let randombtn = document.querySelector(`.${randomcolor}`);
    // console.log(randomind);
    // console.log(randomcolor);
    // console.log(randombtn);
    gameseq.push(randomcolor);
    console.log(gameseq);
    gameflash(randombtn);


}
function checkans(index) {
    // console.log("curr level :", level);



    if (userseq[index] === gameseq[index]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }


    }
    else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";

        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];

    level = 0;
}
