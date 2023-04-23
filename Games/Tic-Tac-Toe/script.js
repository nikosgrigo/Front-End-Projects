"use strict";

const container = document.querySelector(".game_board");
const allSquares = document.querySelectorAll(".square");
const buttonNewGame = document.querySelector("#reset_game_button");
const winningMessage = document.querySelector(".game_state_message");
const totalScoreX = document.getElementById("score_X");
const totalScoreO = document.getElementById("score_O");

let currentPlayer = 0;
let pauseGame = false;
let state = [[], [], []];
let scoreX = 0;
let scoreO = 0;

const fadeOutMessage = function () {
  winningMessage.classList.replace("animate__fadeIn", "animate__fadeOut");
  setTimeout(function () {
    winningMessage.classList.remove("animate__fadeOut");
    winningMessage.classList.add("hidden");
  }, 1000);
};

const fadeInMessage = function () {
  winningMessage.classList.add("animate__fadeIn");
  winningMessage.classList.remove("hidden");
};

//Reset the game
const resetGame = function () {
  fadeOutMessage();
  const newArray = [...allSquares];
  newArray.forEach((squareEl) => (squareEl.textContent = ""));
  currentPlayer = 0;
  pauseGame = false;
  state = [[], [], []];
};

buttonNewGame.addEventListener("click", resetGame);

//Check for winner
const checkForWinner = function (board) {
  // prettier-ignore
  const winningCombinations = [
    [[0, 0], [0, 1], [0, 2]], // Rows
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]], // Columns
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]], // Diagonals
    [[0, 2], [1, 1], [2, 0]]
  ];

  let winner = null;
  let result = false;

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      board[a[0]][a[1]] &&
      board[a[0]][a[1]] === board[b[0]][b[1]] &&
      board[a[0]][a[1]] === board[c[0]][c[1]]
    ) {
      winner = board[a[0]][a[1]];
      result = true;
    }
  }

  const fullBoard = board.flat().length == 9;

  if (result) {
    winner === "x" ? scoreX++ : scoreO++; //There is a winner
    return { winner: winner, result: 1 };
  } else if (!result && fullBoard) {
    return { winner: null, result: 0 }; // Draw
  } else {
    return { winner: null, result: -1 }; // No winner found
  }
};

const displayWinner = function (player) {
  winningMessage.textContent = `Player ${
    player === "x" ? "X" : "O"
  } won the game! 🥳`;
  totalScoreO.textContent = scoreO;
  totalScoreX.textContent = scoreX;
  fadeInMessage();
};

container.addEventListener("click", function (e) {
  //If the game continues
  if (!pauseGame) {
    //Get the square that was clicked by the user
    const squareClicked = e.target;

    //Get the row and column base on the id of the square that was clicked
    const row = squareClicked.id.slice(0, 1) - 1;
    const col = squareClicked.id.slice(-1) - 1;

    //Check if square is full and do nothing
    if (squareClicked.textContent != "") {
      return 0;
    } else {
      //first player playing then x
      if (currentPlayer === 0) {
        squareClicked.textContent = "x";
        state[row][col] = "x";

        //second player playing then o
      } else if (currentPlayer === 1) {
        squareClicked.textContent = "o";
        state[row][col] = "o";
      }

      //Change player
      currentPlayer++;
      if (currentPlayer % 2 === 0) currentPlayer = 0;
    }

    const { winner, result } = checkForWinner(state);

    //There is a winner
    if (result === 1) {
      pauseGame = true;
      displayWinner(winner);
      //There is a draw
    } else if (result === 0) {
      winningMessage.textContent = "There is a draw!😵";
      winningMessage.classList.remove("hidden");
    }
  }
});
