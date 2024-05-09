let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

//access score board
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');
const Choice = document.querySelectorAll('.choice');
//generate  ramdom choices
const genCompChoice = () => {
    const option = ['rock', 'paper', 'scissors']
    // generate computer choice
    const randomIdx = Math.floor(Math.random() * 3);
    // console.log(randomNum);
    return option[randomIdx];
}

//if game was draw then this function will run
const drawGame = () => {
    console.log('Game was draw!');
    msg.innerText = 'Game was Draw, play again!'
    msg.style.backgroundColor = '#081b31'
}



//show winner
const showWinner = (userWin, userChoice, compChoice) => {
    //check the condition
    if (userWin) {
        //increase user score
        userScore++;
        userScorePara.innerText = userScore;
        console.log('You Win!')
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = 'green'
    }
    else {
        // increase computer score
        compScore++;
        compScorePara.innerText = compScore;
        console.log('You Lose!')
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = 'red'
    }
}
const playGame = (userChoice) => {
    console.log('user Choice = ', userChoice);

    // generate computer choice
    const compChoice = genCompChoice();
    console.log('comp choice = ', compChoice);

    if (userChoice === compChoice) {
        //call drawGame function
        drawGame();
    }
    else {
        let userWin = true;

        if (userChoice === 'rock') {
            //scissors, paper
            userWin = compChoice === 'paper' ? false : true;
        }
        else if (userChoice === 'paper') {
            //rock, scissors
            userWin = compChoice === 'scissors' ? false : true;
        }
        else {
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

//user choice 
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id')
        // console.log('choices was click', userChoice);

        // call playGame
        playGame(userChoice);
    })
});

const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    window.location.reload();
})