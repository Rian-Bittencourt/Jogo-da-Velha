document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handdleClick);
    })
})

function handdleClick(event) {



    let square = event.target;
    let position = square.id;

    if (handdleMove(position)) {
        let squares = document.querySelectorAll(".square");





        setTimeout(() => {
            alert(" O Jogo Acabou - O Vencedor foi "
                + playerName)


            board = ['', '', '', '', '', '', '', '', ''];
            playerTime = 0;
            gameOver = false;


            squares.forEach((square) => {
                square.innerHTML = `<div class=''></div>`

            })




        }, 100);


    };





    if (gameOver) {


        if (playerTime == 0) {
            const scoreX = document.getElementById("iD1");
            countX++
            scoreX.innerHTML = "&#128293;: " + countX
            playerName = "Fire"
        }
        if (playerTime == 1) {
            const scoreO = document.getElementById("iD2");
            countO++
            scoreO.innerHTML = "&#129482;: " + countO
            playerName = "Ice"
        }


    }




    updateSquare(position);


}


function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let synbol = board[position];
    square.innerHTML = `<div class='${synbol}'></div>`
}


let botaoReset = document.querySelector('#restart');


botaoReset.addEventListener('click', function () {

    let squares = document.querySelectorAll(".square");


    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;


    squares.forEach((square) => {
        square.innerHTML = `<div class=''></div>`

    })
})















