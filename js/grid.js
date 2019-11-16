/**
 * Generate a 2D array of dimensions cols x rows filled with
 * the specified value
 * 
 * @param {Number} cols 
 * @param {Number} rows
 * @returns {Array}
 */
function create2DArray(cols, rows, val) {
    return retArr = [...Array(cols)].map(x => Array(rows).fill({}).map(y => val ? val : ~~(Math.random() * 2)));
}

class Grid {

    /**
     * Create a new Grid
     * 
     * @param {Number} cols 
     * @param {Number} rows 
     */
    constructor(cols, rows) {
        this.cols = cols;
        this.rows = rows;
        this.grid = create2DArray(this.cols, this.rows);
        this.neighbours = [
            [0, 0],
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1]
        ];
    }

    /**
     * Set the state of a specific square
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} state 
     */
    setState(x, y, state) {
        this.grid[y][x] = state;
    }

    /**
     * Get the state of the specific position
     * 
     * @param {Number} x 
     * @param {Number} y 
     */
    getState(x, y) {
        return this.grid[y][x];
    }

    /**
     * Flip the state of the current location and the Von Neumann neighours
     * 
     * @param {Number} x 
     * @param {Number} y 
     */
    flipNeigbours(x, y) {
        if (!Utils.isValidMove(x, y)) {
            return;
        }
        for (let pos of this.neighbours) {
            let new_x = x + pos[0];
            let new_y = y + pos[1];
            if (Utils.isValidMove(new_x, new_y)) {
                this.setState(new_x, new_y, this.getState(new_x, new_y) ^ 1);
            }
        }
    }

    /**
     * Check if the grid contains a specified value
     * 
     * @param {*} val
     * @returns {Boolean} 
     */
    contains(val) {
        for (let row of this.grid) {
            if (row.includes(val)) {
                return true;
            }
        }
        return false;
    }

}