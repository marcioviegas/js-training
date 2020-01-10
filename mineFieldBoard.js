class MineFieldBoard {

    boardEmptySlots = [];
    bombsOnBoard = [];

    constructor(boardSize, bombsQuantity) {

        this.boardSize = boardSize;

        this.initializeBoardEmptySlots();

        while (bombsQuantity--) {
            this.addBomb();
        }

    }

    initializeBoardEmptySlots() {

        let quantityOfSlots = this.boardSize**2;
        this.boardEmptySlots = [...Array(quantityOfSlots).keys()]

    }

    addBomb() {

        let emptyRandomSlotIdentified = this.getNextRandomEmptyBoardSlot();
        let emptyRandomSlotIdentifiedOnMatrix = this.getCalculatedRowAndColumn(emptyRandomSlotIdentified);

        this.bombsOnBoard.push(emptyRandomSlotIdentifiedOnMatrix);
        this.removeEmptyBoardSlot();

    }

    getCalculatedRowAndColumn(bombSlot) {

        let column = bombSlot % 9;
        let row = Math.floor(bombSlot / this.boardSize);
        return [row, column];

    }

    getNextRandomEmptyBoardSlot() {

        return Math.floor(Math.random() * (this.boardEmptySlots.length)) + 1;

    }

    removeEmptyBoardSlot(slotToBeRemoved) {

        this.boardEmptySlots = this.boardEmptySlots.filter(slot => slot !== slotToBeRemoved);

    }

}

let mineFieldBoard = new MineFieldBoard(10, 1);

console.log("Bombs on board");
console.log(mineFieldBoard.bombsOnBoard);
