function EarthWater(size = 5) {
    
    // Random Board With 0s and 1s
    const board = Array(size).fill().map(() => Array(size).fill().map(() => Math.round(Math.random())));
    
    console.log(board);

    const findNearest = (x, y, earthWater) => {

        const visits = Array(size).fill().map(() => Array(size).fill(0));
        const toVisit = [[x,y]];

        const validPosition = (p) => p >= 0 && p <= size-1;

        const isToVisit = (x, y) =>  validPosition(x) && validPosition(y) && !visits[x][y];

        const addListToVisit = (x, y) => {
            if(isToVisit(x,y)) {
                toVisit.push([x,y])
            }
        }

        while(toVisit.length) {

            const [x, y] = toVisit.shift();

            console.log(`visited ${x} ${y}`);

            if(board[x][y] === earthWater)
                return [x, y];

            addListToVisit(x-1, y-1)
            addListToVisit(x-1, y) 
            addListToVisit(x-1, y+1) 
            addListToVisit(x, y-1) 
            addListToVisit(x, y+1) 
            addListToVisit(x+1, y-1) 
            addListToVisit(x+1, y) 
            addListToVisit(x+1, y+1)
        }

        return false;
    }

    return {
        findNearest: (x, y, earthWater) => {
            const result = findNearest(x,y,earthWater);
            return result ? `found ${result[0]} ${result[1]}` : 'not found';
        }
    }
} 


const earthWater = EarthWater();

console.log(earthWater.findNearest(0,0,1));