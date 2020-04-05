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

        //* CREATE 2d array
        for (let i = 0; i < this.spots.length; i++) {
            this.spots[i] = new Array(res);
        }

        for (let k = 0; k < this.blocks.length; k++) {
            for (let l = 0; l < this.blocks[k].length; l++) {
                const block = this.blocks[k][l];
                for (let i = 0; i < block.spots.length; i++) {
                    for (let j = 0; j < block.spots[i].length; j++) {
                        this.spots[i + block.startI][j + block.startJ] = block.spots[i][j];
                    }
                }
            }
        }

        this.difFactor = difFraction;
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
        //!
        let stack = [];

        for (let i = 0; i < this.spots.length; i++) {
            for (let j = 0; j < this.spots[i].length; j++) {
            }
        }
        //!
    }

    checkSpot(spot) {
        const blockI = floor(spot.i / 3);
        const blockJ = floor(spot.j / 3);
        const block = this.blocks[blockI][blockJ];

        return this.checkHorizontally(spot) && this.checkVertically(spot);
    }

    checkHorizontally(spot) {
        for (let i = 0; i < this.spots.length; i++) {
            if (this.spots[spot.i][i].val == spot.val) return false;
        }
        return true;
    }

    checkVertically(spot) {
        for (let i = 0; i < this.spots.length; i++) {
            if (this.spots[i][spot.j].val == spot.val) return false;
        }
        return true;
    }

}