// Create a 2D Grid with a dimension of 10 x 10 
const GameOfLife = require('./GameOfLife');

describe('Game of Life Grid', () => {
    test('should create a 10x10 grid', () => {
        const game = new GameOfLife();
        const grid = game.createGrid();
        
        // Check grid dimensions
        expect(grid.length).toBe(10);
        grid.forEach(row => {
            expect(row.length).toBe(10);
        });

        // Check that all cells are initialized (likely as dead cells)
        grid.forEach(row => {
            row.forEach(cell => {
                expect(cell).toBeDefined();
            });
        });
    });
});
