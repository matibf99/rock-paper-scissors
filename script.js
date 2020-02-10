function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];

    return options[Math.floor(Math.random() * options.length)];
}

function roundResult(playerSelection, computerSelection) {
    
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'rock')
                return ['draw' ,'Draw! Rock vs Rock'];
            else if (computerSelection == 'paper')
                return ['lose', 'You lose! Paper beats Rock']; 
            else if (computerSelection == 'scissors')
                return ['win', "You win! Rock beats Scissors"];
            break;
        case 'paper':
            if (computerSelection == 'rock')
                return ['win', 'You win! Paper beats Rock'];
            else if (computerSelection == 'paper')
                return ['draw', 'Draw! Paper vs Paper']; 
            else if (computerSelection == 'scissors')
                return ['lose', 'You lose! Scissors beats Paper'];
            break;
        case 'scissors':
            if (computerSelection == 'rock')
                return ['lose', 'You lose! Rock beats Scissors'];
            else if (computerSelection == 'paper')
                return ['win', 'You win! Scissors beats Paper']; 
            else if (computerSelection == 'scissors')
                return ['draw', 'Draw! Scissors vs Scissors'];
            break;
        default:
            return null;
    }

}

function playRound(playerSelection) {
    if (hScore < 5 && cScore < 5) {
        let computerSelection = computerPlay();
    
    
        let result = roundResult(playerSelection, computerSelection);
        
        status.textContent = result[1];
    
        if (result[0] == 'win') {
            status.style.color = '#66ff66';
        } else if (result[0] == 'lose') {
            status.style.color = '#ff4d4d';
        } else {
            status.style.color = '#ffffff'
        }
    
        switch(computerSelection) {
            case 'rock':
                computerSelectImg.src = "img/rock.png";
                break;
            case 'paper':
                computerSelectImg.src = "img/paper.png"
                break;
            case 'scissors':
                computerSelectImg.src = "img/scissors.png"
        }
    
        switch(playerSelection) {
            case 'rock':
                humanSelectImg.src = "img/rock.png";
                break;
            case 'paper':
                humanSelectImg.src = "img/paper.png"
                break;
            case 'scissors':
                humanSelectImg.src = "img/scissors.png"
        }
    
        if (result[0] == 'win') {
            hScore++;
            humanScore.textContent = hScore;
        } else if (result[0] == 'lose') {
            cScore++;
            computerScore.textContent = cScore;
        }

        //cd853f peru
        if (hScore >= 5) {
            humanSelectImg.src = "img/winner.png";
            computerSelectImg.src = "img/interrogation.png";
            scoreBoard.style.backgroundColor = '#009933';
            scoreBoard.style.border = 'solid 1px #009933';
            scoreBoard.style.boxShadow = '0 0 2px 0 #009933';
        } else if (cScore >= 5) {
            computerSelectImg.src = "img/winner.png";
            humanSelectImg.src = "img/interrogation.png";
            scoreBoard.style.backgroundColor = '#990000';
            scoreBoard.style.border = 'solid 1px #990000';
            scoreBoard.style.boxShadow = '0 0 2px 0 #990000';
        }
    }
}

function restart() {
    let scoreBoard = document.querySelector('#score_board');

    scoreBoard.style.backgroundColor = '#cd853f';
    scoreBoard.style.border = 'solid 1px #ffa500';
    scoreBoard.style.boxShadow = '0 0 2px 0 #ffa07a';

    hScore = 0;
    cScore = 0;

    humanScore.textContent = hScore;
    computerScore.textContent = cScore;

    humanSelectImg.src = 'img/interrogation.png';
    computerSelectImg.src = 'img/interrogation.png';

    status.textContent = 'Click any option to start playing! Wins whoever gets 5 points first';
    status.style.color = '#ffffff'; 
}

const scoreBoard = document.querySelector('#score_board');
const status = document.querySelector('#status');

const humanScore = document.querySelector('#human_score');
const computerScore = document.querySelector('#computer_score');

const humanSelectImg = document.querySelector('#option_select_human');
const computerSelectImg = document.querySelector('#option_select_computer');
    

var hScore = 0;
var cScore = 0;

const btnRock = document.querySelector('#btn_rock');
const btnPaper = document.querySelector('#btn_paper');
const btnScissors = document.querySelector('#btn_scissors');

const btnReset = document.querySelector('#reset');

btnRock.addEventListener('click', () => {
    playRound('rock');
});

btnPaper.addEventListener('click', () => {
    playRound('paper');
});

btnScissors.addEventListener('click', () => {
    playRound('scissors');
});

btnReset.addEventListener('click', restart);        
