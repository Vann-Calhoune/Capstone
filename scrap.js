//search bar
const input = document.querySelector("input");
//search all players
const players = document.querySelectorAll("[.playerDrag]");
//filter through playerDrag array and if ID of element equals user input value, save to selectedPlayer
let selectedPlayer = players.filter(player => player.id === input.value);

function search() {
  //Loop through players and display player whose ID matches user input
  players.forEach(player => {
    if (player.id === selectedPlayer) {
      player.style.display = "line-item";
    } else {
      player.style.display = "none";
    }
  });
}
