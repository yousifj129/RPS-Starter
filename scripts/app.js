function init() {

    /*-------------------------------- Constants --------------------------------*/

    const choices = ["rock", "paper", "scissors"]

    /*-------------------------------- Variables --------------------------------*/
    let wins = 0
    let loses = 0
    let ties = 0
    /*------------------------ Cached Element References ------------------------*/
    const rockBtn = document.querySelector("#rock")
    const paperBtn = document.querySelector("#paper")
    const scissorsBtn = document.querySelector("#scissors")
    const resultDisplay = document.querySelector("#result-display")
    const choiceText = document.querySelector("#choices")
    /*-------------------------------- Functions --------------------------------*/
    function win(){
        wins++;
        resultDisplay.textContent = `You Won! \nWins: ${wins}, Ties: ${ties}, Loses: ${loses}`
    }
    function lose(){
        loses++;
        resultDisplay.textContent = `You Lost! \nWins: ${wins}, Ties: ${ties}, Loses: ${loses}`
    }
    function tie(){
        ties++;
        resultDisplay.textContent = `Tie! \nWins: ${wins}, Ties: ${ties}, Loses: ${loses}`

    }

    function whoWins(choice1, choice2){
        if(choice1 == choice2){
            return 0
        }
        else if(choice1 == "rock" && choice2 == "scissors"){
            return 1
        }
        else if(choice1 =="paper" && choice2 =="rock"){
            return 1
        }
        else if(choice1 =="scissors" && choice2 =="paper"){
            return 1
        }
        else{
            return -1
        }
        

    }
    function play(event){
        const choice = event.target.id
        const botChoiceIndex =Math.floor(Math.random() * 3);
        const botChoice = choices[botChoiceIndex]
        choiceText.textContent = `You chose ${choice} and the Bot chose ${botChoice}`
        if(whoWins(choice, botChoice) == 1){
            win()
        }
        else if(whoWins(choice, botChoice) == -1){
            lose()
        }
        else {
            tie()
        }
    }
    

    /*----------------------------- Event Listeners -----------------------------*/
    // rockBtn.addEventListener("click", function(){
    //     play("rock")
    // })
    // paperBtn.addEventListener("click", function(){
    //     play("paper")
    // })
    // scissorsBtn.addEventListener("click", function(){
    //     play("scissors")
    // })

    rockBtn.addEventListener("click", play)
    paperBtn.addEventListener("click", play)
    scissorsBtn.addEventListener("click", play)
}

document.addEventListener('DOMContentLoaded', init)
