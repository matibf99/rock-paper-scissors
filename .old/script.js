function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];

    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    
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

function game() {
    let options = ['rock', 'paper', 'scissors'];

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log('Turn: ' + i);

        playerSelection = prompt('Write your play (rock, paper or scissors): ').toLowerCase();

        while (!options.includes(playerSelection)) {
            alert("Invalid option. Try again");
            playerSelection = prompt('Write your play (rock, paper or scissors): ').toLowerCase();
        }

        let computerSelection = computerPlay();

        let turn = playRound(playerSelection, computerSelection);

        switch (turn[0]) {
            case 'lose':
                computerScore++;
                break;
            case 'win':
                playerScore++;
        }
        
        console.log(turn[1]);
        console.log('New score: %s (Player) vs %s (Computer)', playerScore, computerScore);
        console.log();
    }
}

game();

