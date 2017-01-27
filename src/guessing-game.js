class GuessingGame {
    constructor() {
        this.root = null;
        this.left = null;
        this.right = null;
    }

    setRange(min, max) {
        this.root = Math.round((max - min)/2)+ min;
        this.left = min;
        this.right = max;
    }

    guess() {
        return this.root;

    }

    lower() {
        this.setRange(this.left, this.root);
    }

    greater() {
        this.setRange(this.root, this.right);
    }
}

module.exports = GuessingGame;
