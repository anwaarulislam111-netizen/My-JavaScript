const WIN_LIMIT = 10;
let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const restartBtn = document.querySelector("#restart-btn");

const gencomputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
};

const drawGame = () => {
    msg.innerText = "game was draw.Play again!";
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, computerChoice, userChoice) => {
    if (userWin) {
        userScore++;
        userScoreDisplay.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScoreDisplay.innerText = computerScore;
        msg.innerText = `You lose! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

    checkGameWinner();
};       


const playGame = (userChoice) => {
    const computerChoice = gencomputerChoice();
    if(userChoice === computerChoice) {
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false : true;
        }else{
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, computerChoice, userChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
const checkGameWinner = () => {
    if (userScore === WIN_LIMIT || computerScore === WIN_LIMIT) {

        msg.innerText = userScore === WIN_LIMIT
            ? "🎉 You won the game!"
            : "💻 Computer won the game!";

        msg.style.backgroundColor = userScore === WIN_LIMIT ? "green" : "red";

        // disable clicks temporarily
        choices.forEach(c => c.style.pointerEvents = "none");

        setTimeout(() => {
            resetGame();
            choices.forEach(c => c.style.pointerEvents = "auto");
        }, 2000);
    }
};
const resetGame = () => {
    userScore = 0;
    computerScore = 0;

    userScoreDisplay.innerText = 0;
    computerScoreDisplay.innerText = 0;

    msg.innerText = "Play your move!";
    msg.style.backgroundColor = "#081b31";
};

restartBtn.addEventListener("click", resetGame);