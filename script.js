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



