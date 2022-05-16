const buttons = document.querySelectorAll(".buttons-cont .outer-circle");
const computerButtons = document.querySelectorAll(".computers-choice .outer-circle")
const playersButtons = document.querySelectorAll(".players-choice .outer-circle")
const matchResultsCont = document.querySelector(".match-result-cont");
const resultsPopUp = document.querySelector(".match-result-popup");
const playerChoice = document.querySelector(".players-choice");
const computerChoice = document.querySelector(".computers-choice");
const buttonsCont = document.querySelector(".buttons-cont");
const result = document.querySelector(".result")
const score = document.querySelector(".score")
const rules = document.querySelector(".rules")
const closeButton = document.querySelector(".close-btn")
const playButton = document.querySelector(".play-again")
const rulesWrap = document.querySelector(".rules-wrap")

let counter = 0;

rules.addEventListener("click",()=>{
    rulesWrap.classList.add("open-modal")
})  

closeButton.addEventListener("click", ()=>{
    rulesWrap.classList.remove("open-modal")
})

function playersChoice(){  
    for(let i = 0; i< buttons.length ;i++){
        
        buttons[i].addEventListener("click",()=>{
            const buttonsClass = buttons[i].classList[1];
            buttonsCont.classList.add("hide-buttons")
            matchResultsCont.classList.add("show-match-results")
            const button = buttons[i];
            if(buttons[i]){
                playersButtons.forEach(playerButton=>{
                    if(playerButton.classList[1] === buttonsClass){
                        playerButton.classList.add("show-player-btn")
                    }
                })
            }
 
            setTimeout(function computersChoice(){
                for(let i = 4; i< computerButtons.length ;i++){
                    let number = Math.floor(Math.random() * computerButtons.length)
                    computerButtons[number].classList.add("show-computer-btn")
                    checkMatchResult(button, computerButtons[number])
                }


            }, 1000)

            setTimeout(function showResults(){
                resultsPopUp.classList.add("show-results");

            },2000)

            playButton.addEventListener("click",()=>{
                if(result.innerText === "YOU WIN"){
                    counter++
                    score.innerText = counter;
                }
                
                computerButtons.forEach(computerButton=>{
                    computerButton.classList.remove("show-computer-btn")
                })
                
                playersButtons.forEach(playerButton=>{
                    playerButton.classList.remove("show-player-btn")
                })

                buttonsCont.classList.remove("hide-buttons")
                matchResultsCont.classList.remove("show-match-results")
                resultsPopUp.classList.remove("show-results");

                result.innerText = " ";
            })

        })
    }
}



function checkMatchResult(player,computer){

   if(player.classList.contains("rock") && computer.classList.contains("rock")){
        result.innerText = "DRAW"
    }else if(player.classList.contains("rock") && computer.classList.contains("paper")){
        result.innerText = "YOU LOSE"
    }else if(player.classList.contains("rock") && computer.classList.contains("spock") ){
        result.innerText = "YOU LOSE"
    }else if(player.classList.contains("rock") && computer.classList.contains("scissors")){
        result.innerText = "YOU WIN"
    }else if(player.classList.contains("rock") && computer.classList.contains("lizard")){
        result.innerText = "YOU WIN"
    }

    if(player.classList.contains("paper") && computer.classList.contains("paper")){
        result.innerText = "DRAW"
    }else if(player.classList.contains("paper") && computer.classList.contains("scissors")){
        result.innerText = "YOU LOSE"
    }else if(player.classList.contains("paper") && computer.classList.contains("lizard") ){
        result.innerText = "YOU LOSE"
    }else if(player.classList.contains("paper") && computer.classList.contains("rock")){
        result.innerText = "YOU WIN"
    }else if(player.classList.contains("paper") && computer.classList.contains("spock")){
        result.innerText = "YOU WIN"
    }

    if(player.classList.contains("scissors") && computer.classList.contains("scissors")){
        result.innerText = "DRAW"
    }else if(player.classList.contains("scissors") && computer.classList.contains("rock")){
        result.innerText = "YOU LOSE"
    }else if(player.classList.contains("scissors") && computer.classList.contains("spock") ){
        result.innerText = "YOU LOSE"
    }else if(player.classList.contains("scissors") && computer.classList.contains("paper")){
        result.innerText = "YOU WIN"
    }else if(player.classList.contains("scissors") && computer.classList.contains("lizard")){
        result.innerText = "YOU WIN"
    }

    if(player.classList.contains("spock") && computer.classList.contains("spock")){
        result.innerText = "DRAW"
    }else if(player.classList.contains("spock") && computer.classList.contains("lizard")){
        result.innerText = "YOU LOSE"
    }else if(player.classList.contains("spock") && computer.classList.contains("paper") ){
        result.innerText = "YOU LOSE"
    }else if(player.classList.contains("spock") && computer.classList.contains("scissors")){
        result.innerText = "YOU WIN"
    }else if(player.classList.contains("spock") && computer.classList.contains("rock")){
        result.innerText = "YOU WIN"
    }

    if(player.classList.contains("lizard") && computer.classList.contains("lizard")){
        result.innerText = "DRAW"
    }else if(player.classList.contains("lizard") && computer.classList.contains("rock")){
        result.innerText = "YOU LOSE"
    }else if(player.classList.contains("lizard") && computer.classList.contains("scissors") ){
        result.innerText = "YOU LOSE"
    }else if(player.classList.contains("lizard") && computer.classList.contains("paper")){
        result.innerText = "YOU WIN"
    }else if(player.classList.contains("lizard") && computer.classList.contains("spock")){
        result.innerText = "YOU WIN"
    }
}





playersChoice();