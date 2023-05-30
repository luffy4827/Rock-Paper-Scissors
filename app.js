const game = () => {
    let pScore = 0;
    let cScore = 0;

    // start game function
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn')
        });
    };

    // play match
    const playMatch = () => {
        const option = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        // end animation so that our animaiton starts every time we click the button else it will run only one time in the beginningd
        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = "";
            });
        });

        // computer options for hand
        const computerOption = ['rock', 'paper', 'scissors'];

        option.forEach((option) => {
            option.addEventListener('click', function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOption[computerNumber];
                // here we use normal funnction to use this keyword if we have used arrow function then it would not bound this with option
                // console.log(this);
                // console.log(computerChoice);
                // // math.random will generate random num between 0 and 1;

                setTimeout(() => {
                    
                    // compare hands
                    compareHands(this.textContent, computerChoice);
    
                    // update hamds
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;

                },2000);


                // animation for hands
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

            })
        });
    };

    // update score
    const updateScore = ()=> {
        const playerScore = document.querySelector('.player-score p'); 
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore; 
        computerScore.textContent = cScore; 
    }

    // comparision of choices
    const compareHands = (playerChoice, computerChoice) => {
        // update text
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }

        // check for rock
        if(playerChoice === 'rock'){
            if( computerChoice === 'scissors'){
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            } else{
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }

        // check for paper
        if(playerChoice === 'paper'){
            if( computerChoice === 'scissors'){
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            } else{
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
        }
        // check for scissors
        if(playerChoice === 'scissors'){
            if( computerChoice === 'rock'){
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            } else{
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
        }

    };

    // call the inner function herre
    startGame();
    playMatch();
};

// call main function here ie start game function
game();