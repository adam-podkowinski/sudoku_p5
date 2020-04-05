function getPosition(i, j, size) {
    const x = i * size;
    const y = j * size;

    return createVector(x, y);
}

class Sudoku {
    constructor( /* How hard is the game - higher, it's harder, lower - it's easier */ difFraction) {
        this.blocks = new Array(res / 3);
        this.spots = new Array(res);

        for (let i = 0; i < this.blocks.length; i++) {
            //* CREATE 2d array
            this.blocks[i] = new Array(res / 3);
            for (let j = 0; j < this.blocks[i].length; j++) {
                // * i = 0 j = 0 starting i and j = 0 (upper left corner)
                //* i = 2; i = 1 starting i = 6 starting j = 3 (middle right block, so it starts at 4th column and 7th row)
                this.blocks[i][j] = new Block(i * 3, j * 3);
            }
        }

        for (let k = 0; k < this.blocks.length; k++) {
            for (let l = 0; l < this.blocks[k].length; l++) {
                const block = this.blocks[k][l];
                for (let i = 0; i < block.spots.length; i++) {
                    //* CREATE 2d array
                    this.spots[i + block.startI] = new Array(res);
                    for (let j = 0; j < block.spots[i].length; j++) {
                        this.spots[i + block.startI][j + block.startJ] = block.spots[i][j];
                    }
                }
            }
        }

        console.table(this.spots)

        this.difFraction = difFraction;
        this.startFill();
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
                const block = this.blocks[i][j];
                //!
                //Iterate over all spots in one block and try add one spot
                for (let k = 0; k < block.spots.length; k++) {
                    for (let l = 0; l < block.spots[i].length; l++) {
                        const spot = block.spots[k][l];

                        if (random(1) > this.difFraction) {
                            do {
                                spot.val = random(0, 9);
                            } while (!this.checkSpot(spot))
                        }
                    }
                }
                //!
            }
        }
        //!
    }

    checkSpot(spot) {
        const blockI = floor(spot.i / 3);
        const blockJ = floor(spot.j / 3);
        const block = this.blocks[blockI][blockJ];
        return true;
        // block.checkSpot(spot);
    }

}