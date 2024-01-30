const dice=document.getElementById('dice');
const rollbutton=document.getElementById('roll-button');
const history=document.getElementById('roll-history');

rollbutton.addEventListener('click',()=>{
    dice.classList.add("roll-animation");
    setTimeout(() => {
        dice.classList.remove("roll-animation");
        dice.innerHTML=rollDice();
    }, 950);
})

function rollDice(){
    let randomNumber=Math.floor(Math.random()*6)+1;
    switch(randomNumber){
        case 1:
            return "&#9856";
        case 2:
            return "&#9857";
        case 3:
            return "&#9858";
        case 4:
            return "&#9859";
        case 5:
            return "&#9860";
        case 6:
            return "&#9861";
        default:
            return "";
    }
}