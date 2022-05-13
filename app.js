const buttons = document.querySelectorAll(".buttons-cont .outer-circle");
const matchButtons = document.querySelectorAll(".match-result-cont .outer-circle")
const matchResultsCont = document.querySelector(".match-result-cont");
const resultsPopUp = document.querySelector(".match-result-popup");
const playerChoice = document.querySelector(".players-choice");
const computerChoice = document.querySelector(".computers-choice");
const buttonsCont = document.querySelector(".buttons-cont");

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        buttonsCont.classList.add("hide-buttons")
        matchResultsCont.classList.add("show-match-results")
        playerChoice.appendChild(button)
        setTimeout(computersChoice, 1000)
        setTimeout(createResultMessage,1000)
    })
});

function computersChoice(){
    for(let i = 4; i< matchButtons.length ;i++){
        let number = Math.floor(Math.random() * matchButtons.length)
        console.log(matchButtons[number])
        matchButtons[number].classList.add("show-button")
    }
}


function createResultMessage(){
    resultsPopUp.classList.add("show-results")
    let html = `<h1>YOU LOSE</h1>
                <button class="play-again">play again</button>    
                `
    const matchResult = document.createElement("div")
    matchResult.classList.add("match-result")
    matchResult.innerHTML = html;
    resultsPopUp.appendChild(matchResult)
}