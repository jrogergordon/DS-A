// Given an m x n matrix, return all elements of the matrix in spiral order.

// Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]


// Input: matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
// Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

var spiralOrder = function (matrix) {
    if (matrix.length === 0 || !matrix || matrix.length === 1) {
        return matrix[0];
    }
    let results = [];
    let record = new Map();
    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let dirInd = 0;
    let curr = [0, 0];
    while (1 === 1) {
        let currDir = dir[dirInd];
        let xChange = currDir[0];
        let yChange = currDir[1];
        x = curr[0];
        y = curr[1];
        if (matrix[x][y] || matrix[x][y] === 0) {
            results.push(matrix[x][y]);
        }
        record.set(`${x}_${y}`);

        if (matrix[x + xChange]
            && (matrix[x + xChange][y + yChange] || matrix[x + xChange][y + yChange] === 0)
            && !record.has(`${x + xChange}_${y + yChange}`)) {
            curr = [x + xChange, y + yChange]
            continue;
        } else {
            if (dirInd === 3) {
                dirInd = 0;
            } else {
                dirInd++;
            }
            currDir = dir[dirInd];
            xChange = currDir[0];
            yChange = currDir[1];
            if (record.has(`${x + xChange}_${y + yChange}`)) {
                return results;
            } else {
                curr = [x + xChange, y + yChange]
            }
        }
    }
}





// Given an m x n binary matrix filled with 0's and 1's, 
// find the largest square containing only 1's and return its area.

var maximalSquare = function (matrix) {
    let dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let z = 0;

    let findSquare = function (square, value) {
        let potentialMax = value;
        z = -1;
        x = square[3][0];
        y = square[3][1];
        a = -1;
        for (let k = 0; k < 4; k++) {
            let reached = false;
            z++;
            a++
            currDir = dir[z];
            while (matrix[x] && matrix[x][y] === '1' && !reached) {
                x = x + dir[z][0];
                y = y + dir[z][1];
                if (x === square[a][0] && y === square[a][1]) {
                    reached = true;
                }
                if (z === 0 || z === 1) {
                    potentialMax++;
                }
            }
            if (!matrix[x] || matrix[x][y] !== '1') {
                return value
            }
        }
        return findSquare([[square[0][0] - 1, square[0][1] - 1],
        [square[1][0] - 1, square[1][1]],
        [square[2][0], square[2][1]],
        [square[3][0], square[3][1] - 1]],
            potentialMax + 1)
    }

    let max = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === '1') {
                if (matrix[i - 1] && matrix[i - 1][j - 1] === '1'
                    && matrix[i - 1][j] === '1'
                    && matrix[i][j - 1] === '1') {
                    max = Math.max(max,
                        findSquare([[i - 2, j - 2], [i - 2, j], [i, j], [i, j - 2]], 4));
                } else {
                    max = Math.max(max, 1);
                }
            }
        }
    }
    return max; 
};


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length === 1) {
        return matrix[0];
    }
    let spiral = [];
    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let indexes = new Map;
    let i = 0;
    let j = 0;
    let run = true;
    let currDir = 0;
    while (run) {
        let curr = `${i}_${j}`
        if (indexes.has(curr) || i === matrix.length || j === matrix[0].length || i < 0 || j < 0) {
            i = i - dir[currDir][0];
            j = j - dir[currDir][1];
            if (currDir === 3) {
                currDir = 0;
                let x = dir[currDir][0]
                let y = dir[currDir][1]
                i = i + x;
                j = j + y;
                if (indexes.has(`${i}_${j}`) || i === matrix.length || j === matrix[0].length || i < 0 || j < 0) {
                    run = false;
                }
            } else {
                currDir++;
                let x = dir[currDir][0]
                let y = dir[currDir][1]
                i = i + x;
                j = j + y;
                if (indexes.has(`${i}_${j}`) || !i === matrix.length || j === matrix[0].length || i < 0 || j < 0) {
                    run = false;
                }
            }
        }
        if (run) {
            spiral.push(matrix[i][j]);
            indexes.set(`${i}_${j}`);
            i = i + dir[currDir][0];
            j = j + dir[currDir][1]
        }

        console.log(spiral);
    }
    return spiral;
}