var afterChoice = document.getElementById('afterChoice');
var winner = document.getElementById('winner');
var waiting = document.getElementById('waiting');
var scoreValue = document.getElementById('scoreValue');
var playAgainButton = document.getElementById('playAgainButton');
var choice = document.getElementById('choice') || null;
var scissorsButton = document.getElementById('scissors') || null;
var paperButton = document.getElementById('paper') || null;
var lizardButton = document.getElementById('lizard') || null;
var spockButton = document.getElementById('spock') || null;
var rockButton = document.getElementById('rock') || null;
var titleChoice = document.getElementById('titleChoice') || null;
var startGame = document.getElementById('startGame');
var Card;
(function (Card) {
    Card["rock"] = "ROCK";
    Card["paper"] = "PAPER";
    Card["scissors"] = "SCISSORS";
    Card["lizard"] = "LIZARD";
    Card["spock"] = "SPOCK";
})(Card || (Card = {}));
//localStorage
var valuePlayer = localStorage.setItem('value', '12');
var getDataLocalStorage = function (counter) {
    var scoreValue = document.getElementById('scoreValue');
    localStorage.setItem('value', "".concat(counter));
    var resultScore = localStorage.getItem('value');
    scoreValue.innerHTML = "".concat(resultScore);
};
//addEvent to each button
//scissors
scissorsButton.addEventListener('click', function () {
    var container = document.getElementById('scissorsContainer') || null;
    var divChoice = document.getElementById('choiceContainer') || null;
    divChoice.innerHTML = "".concat(container.outerHTML);
    choice = Card.scissors;
    startGame.style.display = 'none';
    afterChoice.style.display = 'flex';
    titleChoice.innerHTML = Card.scissors;
    var randomChoice = randomNumber();
    theWinner(scissorsButton, randomChoice);
    showChoice(randomChoice);
});
//paper
paperButton.addEventListener('click', function () {
    var container = document.getElementById('paperContainer') || null;
    var divChoice = document.getElementById('choiceContainer') || null;
    divChoice.innerHTML = "".concat(container.outerHTML);
    choice = Card.paper;
    startGame.style.display = 'none';
    afterChoice.style.display = 'flex';
    titleChoice.innerHTML = Card.paper;
    var randomChoice = randomNumber();
    theWinner(paperButton, randomChoice);
    showChoice(randomChoice);
});
//lizard
lizardButton.addEventListener('click', function () {
    var container = document.getElementById('lizardContainer') || null;
    var divChoice = document.getElementById('choiceContainer') || null;
    divChoice.innerHTML = "".concat(container.outerHTML);
    choice = Card.lizard;
    startGame.style.display = 'none';
    afterChoice.style.display = 'flex';
    titleChoice.innerHTML = Card.lizard;
    var randomChoice = randomNumber();
    theWinner(lizardButton, randomChoice);
    showChoice(randomChoice);
});
//spock
spockButton.addEventListener('click', function () {
    var container = document.getElementById('spockContainer') || null;
    var divChoice = document.getElementById('choiceContainer') || null;
    divChoice.innerHTML = "".concat(container.outerHTML);
    choice = Card.spock;
    startGame.style.display = 'none';
    afterChoice.style.display = 'flex';
    titleChoice.innerHTML = Card.spock;
    theWinner(spockButton, randomChoice);
    showChoice(randomNumber());
});
//rock
rockButton.addEventListener('click', function () {
    var container = document.getElementById('rockContainer') || null;
    var divChoice = document.getElementById('choiceContainer') || null;
    divChoice.innerHTML = "".concat(container.outerHTML);
    choice = Card.rock;
    startGame.style.display = 'none';
    afterChoice.style.display = 'flex';
    titleChoice.innerHTML = Card.rock;
    var randomChoice = randomNumber();
    theWinner(rockButton, randomChoice);
    showChoice(randomChoice);
});
//playAgain
playAgainButton === null || playAgainButton === void 0 ? void 0 : playAgainButton.addEventListener('click', function () {
    var resultMessage = document.getElementById('winner');
    var randomChoiceImg = document.getElementById('waiting');
    scoreValue = document.getElementById('scoreValue');
    startGame.style.display = 'flex';
    afterChoice.style.display = 'none';
    randomChoiceImg.innerHTML = '';
    resultMessage.innerHTML = '';
    scoreValue.style = 'color:hsl(229, 25%, 31%);';
});
//function to get a random number
var randomNumber = function () {
    var num = Math.floor(Math.random() * Object.keys(Card).length);
    var value = Object.values(Card)[num];
    return value;
};
//FUNCTION SETIMEOUT TO SHOW THE RESULT
var showChoice = function (randomChoice) {
    var randomChoiceName = randomChoice;
    randomChoiceName = randomChoiceName.toLowerCase();
    var container = document.getElementById("".concat(randomChoiceName, "Container"));
    var randomChoiceImg = document.getElementById('waiting');
    setTimeout(function () {
        randomChoiceImg.innerHTML = "".concat(container.outerHTML);
    }, 2000);
};
//show who win
//The rules that you can win or lose
var whenYouWin = {
    scissors: ['paper', 'lizard'],
    paper: ['rock', 'spock'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock'],
    rock: ['scissors', 'lizard']
};
var counter = 12;
var theWinner = function (yourChoice, random) {
    var whoWin = document.getElementById('winner');
    var scoreValue = document.getElementById('scoreValue');
    if (yourChoice === random) {
        setTimeout(function () {
            whoWin.innerHTML = "IT'S A TIE";
            getDataLocalStorage(counter);
        }, 2000);
    }
    else if (whenYouWin["".concat(yourChoice)] == random) {
        setTimeout(function () {
            whoWin.innerHTML = 'YOU WIN';
            counter++;
            getDataLocalStorage(counter);
            scoreValue.style = 'color:green;';
        }, 2000);
    }
    else {
        setTimeout(function () {
            whoWin.innerHTML = 'YOU LOSE';
            counter--;
            getDataLocalStorage(counter);
            scoreValue.style = 'color:red;';
        }, 2000);
    }
};
//Modal
var modal = document.getElementById('rulesModal');
var closeButton = document.getElementById('closeButton');
var rulesButton = document.getElementById('rulesButton');
//open
var openModal = function () {
    modal.style.display = 'block';
    console.log('click');
};
//closeModal
var closeModal = function () {
    modal.style.display = 'none';
};
rulesButton.addEventListener('click', function () { return openModal(); });
closeButton.addEventListener('click', function () { return closeModal(); });
