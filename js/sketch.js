let COLS;
let ROWS;
let SQUARE_SIZE;

let canvas;
let grid;
let all_white = true;
let solve_span;

function initConst() {
    COLS = parseInt(Utils.getElem("cols_in").value);
    ROWS = parseInt(Utils.getElem("rows_in").value);
    SQUARE_SIZE = parseInt(Utils.getElem("sq_width").value);
    solve_span = Utils.getElem("solve_span");
}

function setup() {
    initConst();
    canvas = createCanvas(COLS * SQUARE_SIZE, ROWS * SQUARE_SIZE);
    canvas.parent("sketch_view");

    grid = new Grid(COLS, ROWS);
}

function mousePressed() {
    grid.flipNeigbours(Utils.snap(mouseX, SQUARE_SIZE), Utils.snap(mouseY, SQUARE_SIZE));
}

function draw() {
    initConst();

    for (let x = 0; x < grid.rows; x++) {
        for (let y = 0; y < grid.cols; y++) {
            stroke(200);
            fill(255 * grid.getState(x, y));
            rect(x * SQUARE_SIZE, y * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        }
    }
    let contains = grid.contains(0);
    if (contains == false) {
        solve_span.innerHTML = "solved";
        solve_span.className = "solved";
    } else if (contains == true) {
        solve_span.innerHTML = "unsolved";
        solve_span.className = "unsolved";
    }
}