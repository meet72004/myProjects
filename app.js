let usrScore=0;
let janviScore=0;


const Choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const usrscore = document.querySelector('#usr-score');
const jscore = document.querySelector('#janu-score');


const gameplay = (userwin , userchoice , januchoice) => {
    if(userwin){
        msg.innerText = "arey you won , cheating ki hogi";
        msg.style.backgroundColor = "pink";
        msg.style.color = "black";
        usrScore++;
        usrscore.innerText = usrScore;
        
    }else{
        console.log("you lose");
        msg.innerText = "dekha , haar gye na ";
        msg.style.backgroundColor = "red";
        janviScore++;
        jscore.innerText = janviScore;
    }
}


const playgame = (userchoice)  => {
    console.log(userchoice);
    const januchoice = genjanuChoice();
    if(userchoice === januchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = januchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userwin = januchoice === "scissors" ? false : true;
        }else{
            userwin = januchoice === "rock" ? false : true;
        }
        gameplay(userwin, userchoice , januchoice);
    }
}

const genjanuChoice = () => {
    const option = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random()*3);
    return option[randidx];
}

Choices.forEach((choice) => {
    choice.addEventListener("click" ,() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})

const drawgame = () => {
    msg.innerText = "bach gye tum log dhariya se , draw ho gya";
    msg.style.backgroundColor = "blue";
    msg.style.color = "black";
}
