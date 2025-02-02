let color = "black";
function makeGrid(size) {
  let board = document.querySelector('.board');
  let tiles = board.querySelectorAll("div");
  tiles.forEach((div)=>div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size*size;
  for(let i = 0; i<amount; i++) {
    let tile = document.createElement('div');
    tile.addEventListener("mouseover", colorSquare);
    tile.style.backgroundColor = 'white';
    board.insertAdjacentElement("beforeend", tile);
  }
};

makeGrid(16);

function changeSize(input) {
  if (input >= 2 && input <= 100){
    document.querySelector('.error').style.display = 'none';
    makeGrid(input);
  }
  else {
    document.querySelector('.error').style.display = 'flex';
  }
  
};

function colorSquare(){
   if (color ===  'random') {
    this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    } else {
    this.style.backgroundColor = color;
    }
};

function changeColor(choice){
  color = choice
};

function resetBoard() {
  let board = document.querySelector('.board');
  let tiles = board.querySelectorAll("div");
  tiles.forEach((div)=>div.style.backgroundColor = 'white');
};

