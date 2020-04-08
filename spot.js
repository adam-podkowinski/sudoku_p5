class Spot {
    constructor(i, j, value, blocked) {
        this.i = i;
        this.j = j;
        this.pos = getPosition(i, j, spotSize);
        this.blocked = blocked;
        this.val = value;
        this.empty = this.val < 0;
    }

    show() {
        noFill();
        stroke(0);
        push();
        translate(this.pos.x, this.pos.y);
        rect(0, 0, spotSize, spotSize);
        textAlign(CENTER, CENTER);
        textSize(300 / res);
        fill(0);
        text(this.empty ? '' : this.val, spotSize / 2, spotSize / 2);
        pop();
    }

    setVal(val) {
        this.val = val;

        if (this.empty) this.empty = false;
    }
}