const afterChoice = document.getElementById(
	'afterChoice'
) as HTMLDivElement | null;
const winner = document.getElementById('winner') as HTMLDivElement | null;
const waiting = document.getElementById('waiting') as HTMLDivElement | null;
const scoreValue = document.getElementById(
	'scoreValue'
) as HTMLDivElement | null;
const playAgainButton = document.getElementById(
	'playAgainButton'
) as HTMLButtonElement | null;
const choice = (document.getElementById('choice') as HTMLDivElement) || null;
const scissorsButton =
	(document.getElementById('scissors') as HTMLDivElement) || null;
const paperButton =
	(document.getElementById('paper') as HTMLDivElement) || null;
const lizardButton =
	(document.getElementById('lizard') as HTMLDivElement) || null;
const spockButton =
	(document.getElementById('spock') as HTMLDivElement) || null;
const rockButton = (document.getElementById('rock') as HTMLDivElement) || null;
const titleChoice =
	(document.getElementById('titleChoice') as HTMLDivElement) || null;
const startGame = document.getElementById('startGame') as HTMLDivElement | null;

enum Card {
	rock = 'ROCK',
	paper = 'PAPER',
	scissors = 'SCISSORS',
	lizard = 'LIZARD',
	spock = 'SPOCK',
}

//localStorage
let valuePlayer: object = localStorage.setItem('value', '12');
let getDataLocalStorage = (counter: number) => {
	let scoreValue = document.getElementById('scoreValue') as HTMLDivElement;
	localStorage.setItem('value', `${counter}`);
	let resultScore = localStorage.getItem('value');
	scoreValue.innerHTML = `${resultScore}`;
};

//addEvent to each button
//scissors
scissorsButton.addEventListener('click', () => {
	const container: string =
		(document.getElementById('scissorsContainer') as HTMLDivElement) || null;
	const divChoice =
		(document.getElementById('choiceContainer') as HTMLDivElement) || null;
	divChoice.innerHTML = `${container.outerHTML}`;
	choice = Card.scissors;
	startGame.style.display = 'none';
	afterChoice.style.display = 'flex';
	titleChoice.innerHTML = Card.scissors;
	let randomChoice = randomNumber();
	theWinner(scissorsButton, randomChoice);
	showChoice(randomChoice);
});
//paper
paperButton.addEventListener('click', () => {
	const container: string =
		(document.getElementById('paperContainer') as HTMLDivElement) || null;
	const divChoice =
		(document.getElementById('choiceContainer') as HTMLDivElement) || null;
	divChoice.innerHTML = `${container.outerHTML}`;
	choice = Card.paper;
	startGame.style.display = 'none';
	afterChoice.style.display = 'flex';
	titleChoice.innerHTML = Card.paper;
	let randomChoice = randomNumber();
	theWinner(paperButton, randomChoice);
	showChoice(randomChoice);
});
//lizard
lizardButton.addEventListener('click', () => {
	const container: string =
		(document.getElementById('lizardContainer') as HTMLDivElement) || null;
	const divChoice =
		(document.getElementById('choiceContainer') as HTMLDivElement) || null;
	divChoice.innerHTML = `${container.outerHTML}`;
	choice = Card.lizard;
	startGame.style.display = 'none';
	afterChoice.style.display = 'flex';
	titleChoice.innerHTML = Card.lizard;
	let randomChoice = randomNumber();
	theWinner(lizardButton, randomChoice);
	showChoice(randomChoice);
});
//spock
spockButton.addEventListener('click', () => {
	const container: string =
		(document.getElementById('spockContainer') as HTMLDivElement) || null;
	const divChoice =
		(document.getElementById('choiceContainer') as HTMLDivElement) || null;
	divChoice.innerHTML = `${container.outerHTML}`;
	choice = Card.spock;
	startGame.style.display = 'none';
	afterChoice.style.display = 'flex';
	titleChoice.innerHTML = Card.spock;
	theWinner(spockButton, randomChoice);
	showChoice(randomNumber());
});
//rock
rockButton.addEventListener('click', () => {
	const container: string =
		(document.getElementById('rockContainer') as HTMLDivElement) || null;
	const divChoice =
		(document.getElementById('choiceContainer') as HTMLDivElement) || null;
	divChoice.innerHTML = `${container.outerHTML}`;
	choice = Card.rock;
	startGame.style.display = 'none';
	afterChoice.style.display = 'flex';
	titleChoice.innerHTML = Card.rock;
	let randomChoice = randomNumber();
	theWinner(rockButton, randomChoice);
	showChoice(randomChoice);
});
//playAgain
playAgainButton?.addEventListener('click', () => {
	let resultMessage = document.getElementById('winner') as HTMLDivElement;
	const randomChoiceImg = document.getElementById('waiting') as HTMLDivElement;
	scoreValue = document.getElementById('scoreValue') as HTMLDivElement;
	startGame.style.display = 'flex';
	afterChoice.style.display = 'none';
	randomChoiceImg.innerHTML = '';
	resultMessage.innerHTML = '';
	scoreValue.style = 'color:hsl(229, 25%, 31%);';
});

//function to get a random number
const randomNumber = (): string => {
	const num: number = Math.floor(Math.random() * Object.keys(Card).length);
	const value: string = Object.values(Card)[num];
	return value;
};

//FUNCTION SETIMEOUT TO SHOW THE RESULT
const showChoice = (randomChoice: string) => {
	let randomChoiceName: string = randomChoice;
	randomChoiceName = randomChoiceName.toLowerCase();
	const container = document.getElementById(
		`${randomChoiceName}Container`
	) as HTMLDivElement;
	const randomChoiceImg = document.getElementById('waiting') as HTMLDivElement;

	setTimeout(() => {
		randomChoiceImg.innerHTML = `${container.outerHTML}`;
	}, 2000);
};

//show who win
//The rules that you can win or lose
const whenYouWin: object = {
	scissors: ['paper', 'lizard'],
	paper: ['rock', 'spock'],
	lizard: ['spock', 'paper'],
	spock: ['scissors', 'rock'],
	rock: ['scissors', 'lizard'],
};
let counter: number = 12;
const theWinner = (yourChoice: string, random: string) => {
	let whoWin = document.getElementById('winner') as HTMLDivElement;
	let scoreValue = document.getElementById('scoreValue') as HTMLDivElement;
	if (yourChoice === random) {
		setTimeout(() => {
			whoWin.innerHTML = "IT'S A TIE";
			getDataLocalStorage(counter);
		}, 2000);
	} else if (whenYouWin[`${yourChoice}`] == random) {
		setTimeout(() => {
			whoWin.innerHTML = 'YOU WIN';
			counter++;
			getDataLocalStorage(counter);
			scoreValue.style = 'color:green;';
		}, 2000);
	} else {
		setTimeout(() => {
			whoWin.innerHTML = 'YOU LOSE';
			counter--;
			getDataLocalStorage(counter);
			scoreValue.style = 'color:red;';
		}, 2000);
	}
};

//Modal
const modal = document.getElementById('rulesModal') as HTMLDivElement;
const closeButton = document.getElementById('closeButton') as HTMLButtonElement;
const rulesButton = document.getElementById('rulesButton') as HTMLButtonElement;

//open
const openModal = () => {
	modal.style.display = 'block';
	console.log('click');
};

//closeModal
const closeModal = () => {
	modal.style.display = 'none';
};

rulesButton.addEventListener('click', () => openModal());
closeButton.addEventListener('click', () => closeModal());
