function getPosition(i, j, size) {
    const x = i * size;
    const y = j * size;

    return createVector(x, y);
}

class Sudoku {
    constructor( /* How hard is the game - higher, it's harder, lower - it's easier */ difFraction) {
        this.blocks = new Array(res / 3);
        //* CREATE 2d array
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i] = new Array(res / 3);
        }
        for (let i = 0; i < this.blocks.length; i++) {
            for (let j = 0; j < this.blocks[i].length; j++) {
                // * i = 0 j = 0 starting i and j = 0 (upper left corner)
                //* i = 2; i = 1 starting i = 6 starting j = 3 (middle right block, so it start 4th column and 7th row)
                this.blocks[i][j] = new Block(i * 3, j * 3);
            }
        }
        // *

        this.difFraction = difFraction;
    }

    show() {
        for (let arr of this.blocks) {
            for (let block of arr) {
                block.show();
            }
        }
    }

    startFill() {
        // Iterate over blocks => if res == 9, i < 3, j < 3 and so on
        //!
        for (let i = 0; i < this.blocks.length; i++) {
            for (let j = 0; j < this.blocks.length; j++) {
                //!
                //Iterate over all spots in one block and try add one spot
                for (let k = 0; k < this.blocks[i][j].spots.length; k++) {
                    for (let l = 0; l < this.blocks[i][j].spots.length; l++) {
                        const block = this.blocks[i][j];
                        const iPos = k + block.startI;
                        const jPos = l + block.startJ;

                        block.addSpot(new Spot(iPos, jPos, this.difFraction));
                    }
                }
                //!
            }
        }
        //!
    }

    checkPuttingSpot(spot) {

    }
}