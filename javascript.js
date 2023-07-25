


function emptyGameboard() {
    var gameboard = {
        row1: 'one two three',
        row2: 'four five six',
        row3: 'seven eight nine',
        column1: 'one four seven',
        column2: 'two five eight',
        column3: 'three six nine',
        cross1: 'three five seven',
        cross2: 'one five nine',
    }
    return gameboard
}

const saveGameboard = {
    row1: 'one two three',
    row2: 'four five six',
    row3: 'seven eight nine',
    column1: 'one four seven',
    column2: 'two five eight',
    column3: 'three six nine',
    cross1: 'three five seven',
    cross2: 'one five nine',
}

var Gameboard = new emptyGameboard();



var turn = 'x';
var round = 0;
var end;

let cells = document.getElementsByClassName('cell');


for(let i = 0; i < 9; i++) {
    cell = document.getElementById(cells[i].getAttribute('id'));
    cell.addEventListener('click', clickedCell, false);
}

function endGame() {
    for(let i = 0; i < 9; i++) {
        document.getElementById(cells[i].getAttribute('id')).innerHTML = '';
        document.getElementById('result').innerHTML = '';
    }
    document.getElementById('reset-game').classList.add('hidden');
    turn = 'x';
    round = 0;
    for(let i = 0; i < 9; i++) {
        cell = document.getElementById(cells[i].getAttribute('id'));
        cell.addEventListener('click', clickedCell, false);
    }
}

function disableCells() {
    for(let i = 0; i < 9; i++) {
        document.getElementById(cells[i].getAttribute('id')).removeEventListener('click', clickedCell);
    }
}


function checkGame () {
    for(set in Gameboard) {
        const a = Gameboard[set].split(' ');
        if(a[0] === a[1] && a[1] === a[2]) {
            document.getElementById('result').innerHTML = a[0] + ' wins!';
            Gameboard = new emptyGameboard();
            end = true;
            let reset_game = document.getElementById('reset-game');
            reset_game.addEventListener('click', endGame, false);
            document.getElementById('reset-game').classList.remove('hidden');
            disableCells();
            return;
        }
    }
    if(round===9){
        document.getElementById('result').innerHTML = "It's a tie.";
        Gameboard = new emptyGameboard();
        end = true;
        disableCells();
        let reset_game = document.getElementById('reset-game');
        reset_game.addEventListener('click', endGame, false);
        document.getElementById('reset-game').classList.remove('hidden');
        
        return;
    }
}

function clickedCell(event) {
    if(turn==='x' && event.target.innerHTML !== 'X' && event.target.innerHTML !== 'O') {
        event.target.innerHTML = 'X';
        for(set in Gameboard) {
            let p = Gameboard[set].split(' ');
            let id = event.target.getAttribute('id');
            let index = p.indexOf(id);
            p[index] = 'X';
            Gameboard[set] = p.join(' ');
            turn = 'o';
        }
        round++;
    } else if (turn==='o' && event.target.innerHTML !== 'X' && event.target.innerHTML !== 'O'){
        event.target.innerHTML = 'O';
        for(set in Gameboard) {
            let p = Gameboard[set].split(' ');
            let id = event.target.getAttribute('id');
            let index = p.indexOf(id);
            p[index] = 'O';
            Gameboard[set] = p.join(' ');
            turn = 'x';
        }
        round++;
    }
    checkGame();
} 






