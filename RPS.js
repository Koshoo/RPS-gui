let options = ["rock", "paper", "scissors"]

function computerPlay() {
	let choose = Math.floor(Math.random() * 3);
	return options[choose];
}



function playRound(playerSelection) {
	computerSelection = computerPlay();

	result.textContent = "Player selects - " + playerSelection.toUpperCase() + " Comupter selects - " + computerSelection.toUpperCase();
	div.appendChild(result);



	//0 = tie
	//1 = player wins
	//2 = computer wins


	if (computerSelection === "rock" && playerSelection === "paper") {
		playerScore++;
	} else if (computerSelection === "rock" && playerSelection === "scissors") {
		computerScore++;
	} else if (computerSelection === "paper" && playerSelection === "scissors") {
		playerScore++;
	} else if (computerSelection === "paper" && playerSelection === "rock") {
		computerScore++;
	} else if (computerSelection === "scissors" && playerSelection === "rock") {
		playerScore++;
	} else if (computerSelection === "scissors" && playerSelection === "paper") {
		computerScore++;
	}

	score.textContent = "Player - " + playerScore;
	score.textContent += " Computer- " + computerScore;
	


	if (playerScore == 5){
		alert("You win!");
		playerScore = 0;
		computerScore = 0;
	}

	if(computerScore == 5) {
		alert("Computer wins");
		playerScore = 0;
		computerScore = 0;
	}
}

const result = document.createElement('p');
result.style.textAlign = "center";
result.style.fontSize = "30px"
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const score = document.getElementById("score");
const div = document.getElementById('results');


let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', function () { playRound('rock') });
paper.addEventListener('click', function () { playRound('paper') });
scissors.addEventListener('click', function () { playRound('scissors') });






/* function game() {
	 let computerScore = 0
	 let playerScore = 0

	 for (let i = 0; i < 5; i++) {
		 currentRound = playRound()

		 if (currentRound == 0) {
			 console.log("Round is tie")
			 i--
		 }
		 if (currentRound == 1) {
			 playerScore++
		 } else if(currentRound == 2) {
			 computerScore++
		 }

		 console.log("Player score - " + playerScore)
		 console.log("Computer score - " + computerScore)
	 }
	 if (playerScore > computerScore) {
		 alert("You Win!")
	 } else {
		 alert("Computer Wins.")
	 }
 }
 */





