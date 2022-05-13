const buttons = document.querySelectorAll(".buttons-cont .outer-circle");
const matchButtons = document.querySelectorAll(".match-result-cont .outer-circle")
const matchResultsCont = document.querySelector(".match-result-cont");
const resultsPopUp = document.querySelector(".match-result-popup");
const playerChoice = document.querySelector(".players-choice");
const computerChoice = document.querySelector(".computers-choice");
const buttonsCont = document.querySelector(".buttons-cont");
const result = document.querySelector(".result")


function playersChoice(){
    buttons.forEach(button => {
        button.addEventListener("click", ()=>{
            buttonsCont.classList.add("hide-buttons")
            matchResultsCont.classList.add("show-match-results")
            playerChoice.appendChild(button)
            setTimeout(function computersChoice(){
                for(let i = 4; i< matchButtons.length ;i++){
                    let number = Math.floor(Math.random() * matchButtons.length)
                    matchButtons[number].classList.add("show-button")
                    checkMatchResult(button, matchButtons[number])
                }
            }, 1000)

            setTimeout(function showResults(){
                resultsPopUp.classList.add("show-results");
            },1000)
        })
    });
}

// function computersChoice(){
//     for(let i = 4; i< matchButtons.length ;i++){
//         let number = Math.floor(Math.random() * matchButtons.length)
//         matchButtons[number].classList.add("show-button")
//     }
// }

function checkMatchResult(player,computer){
   
  if(player.classList.contains("lizard") && computer.classList.contains("lizard")){
        result.innerText = "DRAW";
   }else if(player.classList.contains("lizard") && computer.classList.contains("rock") || computer.classList.contains("scissors") ){
        result.innerText = "YOU LOSE"
   }else if(player.classList.contains("lizard") && computer.classList.contains("") || computer.classList.contains("")){

   }


}




// function createResultMessage(){
//     resultsPopUp.classList.add("show-results")
//     let html = `<h1>YOU LOSE</h1>
//                 <button class="play-again">play again</button>
//                 `
//     const matchResult = document.createElement("div")
//     matchResult.classList.add("match-result")
//     matchResult.innerHTML = html;
//     resultsPopUp.appendChild(matchResult)
// }


playersChoice();