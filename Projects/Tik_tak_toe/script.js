// https://programmer.group/create-a-simple-tic-tac-toe-game-using-html-css-and-javascript.html

// Since we include javascript files in < head >,
//this is necessary because our script will be loaded before
//the browser parses the HTML body.
//If you don't want to include everything in this function,
// feel free to add defer to the script tag or move the script tag to body

window.addEventListener("DOMContentLoaded", () => {
  const tiles = Array.from(document.querySelectorAll(".tile"));
  const playerDisplay = document.querySelector(".display-player");
  const resetButton = document.querySelector("#reset");
  const announcer = document.querySelector(".announcer");

  let board = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";
  let isGameActive = true;

  const PLAYERX_WON = "PLAYERX_WON";
  const PLAYERO_WON = "PLAYERO_WON";
  const TIE = "TIE";

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function handleResultValidation() {
    let roundWon = false;
    //we will traverse the winConditions array and check
    //each winning condition on the chessboard.
    //For example, in the second iteration,
    // we will check these values: board 3,board4,board5.
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      const a = board[winCondition[0]];
      const b = board[winCondition[1]];
      const c = board[winCondition[2]];
      //optimization
      //if any field is empty we will call continue
      //and jump to the next iteration
      //because if there are empty tiles in winning condition,
      //you will not win.
      //If all fields are equal ,we have a winner,
      //so we set roundWon true and break the for look
      //because any further iteration will waste calculaion
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }
    //we will checking  the value of roundWon variable.
    //If is true,we will announce the winner and set the game inactive

    if (roundWon) {
      announce(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);
      isGameActive = false;
      return;
    }
    if (!board.includes("")) announce(TIE);
  }

  // Now we will write the announcer function to announce the final game result.
  // It will receive the end game type and innerText will update the announcer
  //DOM node based on the result. In the last line, we must remove the hidden class,
  // because the announcer is hidden by default until the end of the game.
  const announce = (type) => {
    switch (type) {
      case PLAYERO_WON:
        announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
        break;
      case PLAYERX_WON:
        announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
        break;
      case TIE:
        announcer.innerText = "Tie";
    }
    announcer.classList.remove("hide");
  };

  //for validation of text is availble in tile after player's turn
  const isValidAction = (tile) => {
    if (tile.innerText === "X" || tile.innerText === "O") {
      return false;
    }
    return true;
  };

  //to give footprint of player to the given index
  const updateBoard = (index) => {
    board[index] = currentPlayer;
  };

  //to change the turn of player
  const changePlayer = () => {
    playerDisplay.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    playerDisplay.innerText = currentPlayer;
    playerDisplay.classList.add(`player${currentPlayer}`);
  };

  //this below function takes tile and an index as arguments
  //this function is called when user clicks a block
  const userAction = (tile, index) => {
    //we need to check whether it is avlid action.
    //we will also check whether the game is currently active
    //if both are true
    //we innerText update the tile with symbol of the current player
    if (isValidAction(tile) && isGameActive) {
      tile.innerText = currentPlayer;
      //add the corresponding class and update the board array
      tile.classList.add(`player${currentPlayer}`);
      updateBoard(index);
      //now check whether the game over so we call handleResultValidation()
      handleResultValidation();
      //we must call the changePlayer method to pass the round to another player
      changePlayer();
    }
  };

  //in this function
  //we set the board X to consist of nine empty syrings,
  //sey the game to active,
  //remove the announcer and change the player back
  //(X always starts according to the defination)
  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    announcer.classList.add("hide");

    if (currentPlayer === "o") {
      changePlayer();
    }

    //set innerText back to an empty string
    //and remove any player specific classes from the block
    tiles.forEach((tile) => {
      tile.innerText = "";
      tile.classList.remove("playerX");
      tile.classList.remove("playerO");
    });
  };

  //in order for game to work properly,
  //we must add an event listner to the tile.
  tiles.forEach((tile, index) => {
    tile.addEventListener("click", () => userAction(tile, index));
  });
  //click event listner for reset button
  resetButton.addEventListener("click", resetBoard);
});
