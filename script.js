let ok = document.getElementById("ok");
let newgame = document.getElementById("newgame");
let vvod = document.getElementById("vvod")
vvod.select()
let min=0;
let max=20;
let secret = getRandom();
let numberQuiz = document.getElementsByTagName
    ("h1")[0]
    let podskazka = document.getElementById("pravilo")
let lives = 5;
let hearts = document.getElementsByTagName("h2")[0]

function getRandom(){
return Math.floor(Math.random()*(max-min+1)+min)
}

newgame.onclick = function () {
    console.log("start")
    podskazka.innerHTML="угадай число, которое загадал компьютер"
    lives = 5;
    secret=getRandom()
    hearts.innerHTML = "💙".repeat(lives)
    vvod.select()
    ok.disabled=false
}
hearts.innerHTML = "💙".repeat(lives)
ok.onclick = function (event) {
    event.preventDefault();
    console.log(vvod.value);
    if (vvod.value == secret) {
        ok.disabled=true
        numberQuiz.innerHTML = "you won"
        podskazka.innerHTML = "ты победил"

    } 
    else {
        lives = lives - 1
        if(lives<1){
            hearts.innerHTML = "🤬"
            numberQuiz.innerHTML="you lose" 
            podskazka.innerHTML ="секретное число: "+secret
            console.log(secret);
         
        }
        else
        {

            hearts.innerHTML = "💙".repeat(lives)
            if(vvod.value>secret){
                podskazka.innerHTML="секретное число меньше"
            }
            else{
                podskazka.innerHTML="секретное число больше"
            }

            
        }


        
    }
    vvod.select()
}
