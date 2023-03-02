function rollDie(){
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  player1RandomDieImage = "./images/dice" + randomNumber + ".png"
  document.querySelector(".img1").setAttribute("src", player1RandomDieImage);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  player2RandomDieImage = "./images/dice" + randomNumber2 + ".png"
  document.querySelector(".img2").setAttribute("src", player2RandomDieImage);

  displayWinner(randomNumber,randomNumber2);
}

function displayWinner(n1, n2) {
  if (n1 > n2) {
    document.querySelector("h1").innerText = "🚩 Player 1 Wins!"
  }
  else if (n1 < n2) {
    document.querySelector("h1").innerText = "Player 2 Wins! 🚩"
  }
  else {
    document.querySelector("h1").innerText = "Draw"
  }
}

rollDie();