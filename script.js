const board = document.querySelector(".container");
const cells = document.querySelectorAll(".cell");
let message = document.querySelector(".msg");
let score_player_1 = document.querySelector(".score1");
let score_player_2 = document.querySelector(".score2");
const start_btn = document.querySelector(".start-btn");
const restart_btn = document.querySelector(".restart-btn");
let player_1_input = document.getElementById("player1");
let player_2_input = document.getElementById("player2");
let current_player = "";
let player_1_name = "";
let player_2_name = "";
let game_finished = false;

function startGame(){
  player_1_name = player_1_input.value;
  player_2_name = player_2_input.value;

  if(player_1_name!="" && player_2_name!=""){
    current_player = "X";
    message.textContent = `${player_1_name}'s turn`;
  }
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
        return true;
    }
  }
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



