class Block {
    constructor(startI, startJ) {
        this.spots = new Array(3);
        for (let i = 0; i < this.spots.length; i++) {
            this.spots[i] = new Array(3);
        }

        this.startI = startI;
        this.startJ = startJ;
        this.startPos = getPosition(startI, startJ, spotSize);
    }

    show() {
        this.spots.forEach(e => e.forEach(spot => spot.show()));
        fill(0);
        push();
        translate(this.startPos.x, this.startPos.y);
        rect(0, 0, spotSize * 3, borderWidth);
        rect(0, 0, borderWidth, spotSize * 3);
        rect(0 + spotSize * 3, 0, borderWidth, spotSize * 3);
        rect(0, 0 + spotSize * 3, spotSize * 3 + borderWidth, borderWidth);
        pop();
    }

    addSpot(spot) {
        let i = 0;
        let j = 0;
        if (spot.i < 3) i = spot.i; else i = spot.i % 3;
        if (spot.j < 3) j = spot.j; else j = spot.j % 3;
        if (this.spots[i][j] == undefined) {
            this.spots[i][j] = spot;
        }
        else if (this.spots[i][j].empty()) {
            this.spots[i][j] = spot;
        }
    }
}