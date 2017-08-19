// scripts.js

var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function () {
    playerPick('Kamień')
});
pickPaper.addEventListener('click', function () {
    playerPick('Papier')
});
pickScissors.addEventListener('click', function () {
    playerPick('Nożyczki')
});
var gameState = 'notStarted', //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };
var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
    switch (gameState) {
        case 'started':
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
            break;
        case 'ended':
            newGameBtn.innerText = 'Jeszcze raz';
        case 'notStarted':
        default:
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'none';
    }
}
setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
    player.name = prompt('Proszę wpisz swoje Imię', 'Imię gracza');
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

        playerNameElem.innerHTML = player.name;
        setGamePoints();
    }

}

function playerPick(playerPick) {
    console.log(playerPick);
}

var x = Math.random();
Math.floor(Math.random() * 3)


function getComputerPick() {
    var possiblePicks = ['Kamień', 'Papier', 'Nożyczki'];
    return possiblePicks[Math.floor(Math.random() * 3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}
checkRoundWinner(playerPick, computerPick);

function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'Gracz';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'Kamień' && playerPick == 'Nożyczki') ||
        (computerPick == 'Nożyczki' && playerPick == 'Papier') ||
        (computerPick == 'Papier' && playerPick == 'Kamień')) {

        winnerIs = 'komputer';
    }

    if (winnerIs == 'Gracz') {
        playerResultElem.innerHTML = "Wygrana!";
        player.score++;
        setGamePoints();
    } else if (winnerIs == 'komputer') {
        computerResultElem.innerHTML = "Wygrana!";
        computer.score++;
        setGamePoints();
    }

}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
    roundEnd();
}

function roundEnd() {
    if (player.score == 10) {
        gameState = 'ended';
        setGameElements();
        alert('Koniec gry!\nGratulacje! Wygrałeś!\nTwój wynik ' + player.score + '\nWynik komputera ' + computer.score);
    } else if (computer.score == 10) {
        gameState = 'ended';
        setGameElements();
        alert('Koniec gry!\nNiestety przegrałeś ;(\nTwój wynik ' + player.score + '\nWynik komputera ' + computer.score);
    }
}
