function Bomber(boardSize = 5, bombsQuantity = 8) {
    const boardBlocks = Math.pow(boardSize, 2);

    const bombPositions = new Map();

    while(bombsQuantity) {

        const randomPosition = Math.floor(Math.random() * boardBlocks);

        if(bombPositions.has(randomPosition))
            continue;
        else
            bombPositions.set(randomPosition)

        bombsQuantity--;
    }
    
    const hasBomb = (x, y) => {
        const position = (x*boardSize) + y;
        return bombPositions.has(position);
    }

    return {
        bombPositions: [...bombPositions.keys()],
        hasBomb
    }

}

const bomber = Bomber();

console.log(bomber.bombPositions);
console.log(bomber.hasBomb(0,0));
console.log(bomber.hasBomb(0,1));
console.log(bomber.hasBomb(0,2));
