class Spot {
    constructor(i, j, difFraction) {
        this.i = i;
        this.j = j;
        this.pos = getPosition(i, j, spotSize);

        this.setValues(difFraction);
    }

    setValues(difFraction) {
        if (random(1) > difFraction) {
            this.empty = true;
            this.val = -1;
        } else {
            this.empty = false;
            this.val = floor(random(0, 9));
        }
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
}