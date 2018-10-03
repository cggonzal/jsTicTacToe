var restart = document.querySelector("#b");

var squares = document.querySelectorAll("td");

var gameOver = document.getElementById("gameover");

function clearBoard(){
  for (var i = 0; i <squares.length; i++) {
      squares[i].textContent = "";
  }
  gameOver.innerHTML = "";
}

restart.addEventListener("click",clearBoard);

function inputBoard(){
    if(this.textContent ===""){
      this.textContent = "X";
    }
    else if(this.textContent === "X"){
      this.textContent = "O";
    }
    else if(this.textContent === "O"){
      this.textContent = "X";
    }
}
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click",inputBoard);
  squares[i].addEventListener("click",checkGameOver);
}

function checkGameOver(){
  if(squares[0].textContent === squares[1].textContent && squares[1].textContent === squares[2].textContent &&
      squares[0].textContent !== "" && squares[1].textContent !== "" && squares[2].textContent !==""){
    gameOver.innerHTML = "GAME OVER!";
  }
  else if(squares[3].textContent === squares[4].textContent && squares[4].textContent === squares[5].textContent &&
          squares[3].textContent !== "" && squares[4].textContent !== "" && squares[5].textContent !==""){
    gameOver.innerHTML = "GAME OVER!";
  }
  else if(squares[6].textContent === squares[7].textContent && squares[7].textContent === squares[8].textContent &&
          squares[6].textContent !== "" && squares[7].textContent !== "" && squares[8].textContent !==""){
    gameOver.innerHTML = "GAME OVER!";
  }
  else if(squares[0].textContent === squares[3].textContent && squares[3].textContent === squares[6].textContent &&
          squares[0].textContent !== "" && squares[3].textContent !== "" && squares[6].textContent !==""){
    gameOver.innerHTML = "GAME OVER!";
  }
  else if(squares[1].textContent === squares[4].textContent && squares[4].textContent === squares[7].textContent &&
          squares[1].textContent !== "" && squares[4].textContent !== "" && squares[7].textContent !==""){
    gameOver.innerHTML = "GAME OVER!";
  }
  else if(squares[2].textContent === squares[5].textContent && squares[5].textContent === squares[8].textContent &&
          squares[2].textContent !== "" && squares[5].textContent !== "" && squares[8].textContent !==""){
    gameOver.innerHTML = "GAME OVER!";
  }
  else if(squares[0].textContent === squares[4].textContent && squares[4].textContent === squares[8].textContent &&
          squares[0].textContent !== "" && squares[4].textContent !== "" && squares[8].textContent !==""){
    gameOver.innerHTML = "GAME OVER!";
  }
  else if(squares[2].textContent === squares[4].textContent && squares[4].textContent === squares[6].textContent
          && squares[2].textContent !=="" && squares[4].textContent !== "" && squares[6].textContent !==""){
    gameOver.innerHTML = "GAME OVER!";
  }
}
