const playerOneBtn = document.querySelector('.btn-primary')
const playerOneScore = document.querySelector('.player-one-score')

const playerTwoBtn = document.querySelector('.btn-secondary')
const playerTwoScore = document.querySelector('.player-two-score')

const playerOneWin = document.querySelector('.p1-winner')
const playerTwoWin = document.querySelector('.p2-winner')

const resetBtn = document.querySelector('.btn-danger')

const playTo = document.querySelector('#playTo')

let winningScore = 3;

playerOneBtn.addEventListener('click', () => playerOneScore.innerHTML++);
playerOneBtn.addEventListener('click', p1)

function p1() {
    if (parseInt(playerOneScore.innerHTML) === winningScore) {
        playerOneBtn.disabled = true;
        playerTwoBtn.disabled = true;
        playerOneScore.style.color = 'green'
        playerTwoScore.style.color = 'red'
        playerOneWin.style.display = 'block'
    }
};

playerTwoBtn.addEventListener('click', () => playerTwoScore.innerHTML++);
playerTwoBtn.addEventListener('click', p2)

function p2() {
    if (parseInt(playerTwoScore.innerHTML) === winningScore) {
        playerOneBtn.disabled = true;
        playerTwoBtn.disabled = true;
        playerOneScore.style.color = 'red'
        playerTwoScore.style.color = 'green'
        playerTwoWin.style.display = 'block'
    }
};

resetBtn.addEventListener('click', () => playerOneScore.innerHTML = '0')
resetBtn.addEventListener('click', () => playerOneBtn.disabled = false)
resetBtn.addEventListener('click', () => playerTwoScore.innerHTML = '0')
resetBtn.addEventListener('click', () => playerTwoBtn.disabled = false)
resetBtn.addEventListener('click', () => playerOneScore.style.color = 'black')
resetBtn.addEventListener('click', () => playerTwoScore.style.color = 'black')
resetBtn.addEventListener('click', () => playTo.selectedIndex = 0)
resetBtn.addEventListener('click', () => playerOneWin.style.display = 'none')
resetBtn.addEventListener('click', () => playerTwoWin.style.display = 'none')



playTo.addEventListener('change', function () {
    winningScore = parseInt(document.getElementById("playTo").value);
})






