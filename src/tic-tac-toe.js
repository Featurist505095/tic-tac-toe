class TicTacToe {
    constructor() {
        this.currPlayer = "x";
        this.field = [["*", "*", "*"],
                      ["*", "*", "*"],
                      ["*", "*", "*"]];
    }

    getCurrentPlayerSymbol() {
        return this.currPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] == "*") {
            this.field[rowIndex][columnIndex] = this.currPlayer;
            this.currPlayer = this.currPlayer == "x" ? "o" : "x";
        }
        /*if (this.currPlayer == "x" && this.field[rowIndex][columnIndex] == "*") {
            this.field[rowIndex][columnIndex] = "x";
            this.currPlayer = "o";
        }
        else {
            if (this.currPlayer == "o" && this.field[rowIndex][columnIndex] == "*") {
                this.field[rowIndex][columnIndex] = "o";
                this.currPlayer = "x";
            }
        }*/
    }

    isFinished() {
        if (this.getWinner() != null || this.noMoreTurns() == true) {
            return true;
        }
        else {
            return false;
        }
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.field[i][0] == this.field[i][1] && this.field[i][1] == this.field[i][2] && this.field[i][0] != "*") {
                return this.field[i][0];
            }
            if (this.field[0][i] == this.field[1][i] && this.field[1][i] == this.field[2][i] && this.field[0][i] != "*") {
                return this.field[0][i];
            }
        }
        if (this.field[0][0] == this.field[1][1] && this.field[1][1] == this.field[2][2] && this.field[0][0] != "*") {
            return this.field[0][0];
        }
        if (this.field[0][2] == this.field[1][1] && this.field[1][1] == this.field[2][0] && this.field[0][2] != "*") {
            return this.field[0][2];
        }
        return null;
    }

    noMoreTurns() {
        let checker = this.field.join('').split('');

        return checker.indexOf("*") >= 0 ? false : true;
    }

    isDraw() {
        if (this.getWinner() == null && this.isFinished() == true) {
            return true;
        }
        else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex] != "*" ? this.field[rowIndex][colIndex] : null;
    }
}

module.exports = TicTacToe;
