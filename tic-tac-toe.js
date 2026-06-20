let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgcontainer = document.querySelector('#msg-Container');
let msg = document.querySelector('#msg');
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add('hide');
};



boxes.forEach(box => {
    box.addEventListener('click', () => {
        if(turnO){
            box.innerText = 'O';
            box.classList.add('o');
            turnO = false;
        } else {
            box.innerText = 'X';
            box.classList.add('x');
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
        box.classList.remove('x');
        box.classList.remove('o');
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations,Winner is ${winner} wins!`;
    msgcontainer.classList.remove('hide');
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val && pos1Val === pos2Val && pos2Val === pos3Val){
             if(pos1Val === pos2Val && pos2Val === pos3Val){ 
                showWinner(pos1Val);  
            }
        }
    }
}
newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);    