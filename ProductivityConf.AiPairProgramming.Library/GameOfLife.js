class GameOfLife {
    constructor(rows=10, cols=10){
        this.rows = rows;
        this.cols = cols;
        this.grid = this.createGrid()
    }
    createGrid() {
        const grid = [];
        for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
                row.push(0); 
            }
            grid.push(row);
        }
        return grid;
    }
    // Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
    
}





// Any live cell with fewer than two live neighbours dies, as if by underpopulation
// Any live cell with two or three live neighbours lives on to the next generation.

// Any live cell with more than three live neighbours dies, as if by overpopulation.

// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

module.exports = GameOfLife;