const res = 9;
let spotSize;
let sudoku;
let borderWidth;

function setup() {
	createCanvas(900, 900);
	if (res % 3 == 0) {
		spotSize = width / res - 100 / res;
	} else {
		print('hohohohoh you a bad man');
		return;
	}
	borderWidth = 50 / res;
	sudoku = new Sudoku(0.5);
}

function draw() {
	background(255);
	if (!sudoku) return;
	sudoku.show();
	noLoop();
}
