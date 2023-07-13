const board = document.querySelector(".container");
let cells = document.querySelectorAll(".cell");
let message = document.querySelector(".msg");
let player_1_name = "";
let player_2_name = "";
let score_player_1 = document.querySelector(".score1");
let score_player_2 = document.querySelector(".score2");
const start_btn = document.querySelector(".start-btn");
const restart_btn = document.querySelector(".restart-btn");
let player_1_input = document.getElementById("player1");
let player_2_input = document.getElementById("player2");
let btn0 =document.getElementById('0');
let current_player = "";
let score_first_player = 0;
let score_second_player = 0;
let game_finished = false;

function startGame(){
  player_1_name = player_1_input.value;
  player_2_name = player_2_input.value;

  if(player_1_name!="" && player_2_name!=""){
    current_player = "X";
    message.textContent = `${player_1_name}'s turn`;
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', function makeMove() {
        const cell = cells[i];
        if (cell.textContent === "" && !game_finished) {
          cell.textContent = current_player;
          if (checkWin(current_player)) {
            const winner_name = current_player === "X" ? player_1_name : player_2_name;
            current_player === "X" ? score_player_1.textContent=score_first_player+=1 : score_player_2.textContent=score_second_player+=1;
            message.textContent = `${winner_name} wins!`;
            game_finished = true;
          } else if (checkDraw()) {
              message.textContent = "It's a draw!";
              game_finished = true;
            } else {
                current_player = current_player === "X" ? "O" : "X";
                message.textContent = current_player === "X" ? `${player_1_name}'s turn` : `${player_2_name}'s turn`;
              }
        }
      });
    }
  }else { message.textContent = 'Enter names for player 1 and player 2'};
}

function checkWin(player){
  const winning_index_table = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winning_index_table.length; i++) {
    const [a, b, c] = winning_index_table[i];
    if (cells[a].textContent === player && cells[b].textContent === player && cells[c].textContent === player) {
      cells[a].classList.add("win");
      cells[b].classList.add("win");
      cells[c].classList.add("win"); 
      return true;
    };
  };
  return false;
}

function checkDraw() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      return false;
    }
  }
  return true;
}

function makeMove(i) {
  const cell = cells[i];
  if (cell.textContent === "" && !game_finished) {
    cell.textContent = current_player;
    if (checkWin(current_player)) {
      const winner_name = current_player === "X" ? player_1_name : player_2_name;
      message.textContent = `${winner_name} wins!`;
      game_finished = true;
    } else if (checkDraw()) {
        message.textContent = "It's a draw!";
        game_finished = true;
      } else {
          current_player = current_player === "X" ? "O" : "X";
          message.textContent = current_player === "X" ? `${player_1_name}'s turn` : `${player_2_name}'s turn`;
        }
  }
}

function restartGame(){
  game_finished=false
  for (let i = 0; i < cells.length; i++){
    cells[i].textContent=""
    cells[i].classList.remove("win")
  }
}

start_btn.addEventListener('click', startGame)

restart_btn.addEventListener('click', restartGame)


