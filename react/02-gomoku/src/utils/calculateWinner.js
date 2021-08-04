export function calculateWinner(squares, coord) {
    if (!coord) {
        return new Set();
    }

    const symbol = squares[coord.i][coord.j];
    const winningComb = new Set();

    //vertical
    let verticalWinningComb = new Set();
    for (let i = coord.i - 1; i >= 0; i--) {
        if (squares[i][coord.j] !== symbol) break;
        verticalWinningComb.add(`${i} ${coord.j}`);
    }
    for (let i = coord.i + 1; i < squares.length; i++) {
        if (squares[i][coord.j] !== symbol) break;
        verticalWinningComb.add(`${i} ${coord.j}`);
    }

    //horizontal
    let horizontalWinningComb = new Set();
    for (let j = coord.j - 1; j >= 0; j--) {
        if (squares[coord.i][j] !== symbol) break;
        horizontalWinningComb.add(`${coord.i} ${j}`);
    }
    for (let j = coord.j + 1; j < squares.length; j++) {
        if (squares[coord.i][j] !== symbol) break;
        horizontalWinningComb.add(`${coord.i} ${j}`);
    }

    //main diagonal
    let mainDiagWinningComb = new Set();
    let count = 1;
    while (coord.i - count >= 0 && coord.j - count >= 0) {
        let i = coord.i - count, j = coord.j - count;
        if (squares[i][j] !== symbol) break;
        mainDiagWinningComb.add(`${i} ${j}`);
        ++count;
    }
    count = 1;
    while (coord.i + count < squares.length &&
    coord.j + count < squares.length) {
        let i = coord.i + count, j = coord.j + count;
        if (squares[i][j] !== symbol) break;
        mainDiagWinningComb.add(`${i} ${j}`);
        ++count;
    }

    //side diagonal
    let sideDiagWinningComb = new Set();
    count = 1;
    while (coord.i - count >= 0 &&
            coord.j + count < squares.length) {
        let i = coord.i - count, j = coord.j + count;
        if (squares[i][j] !== symbol) break;
        sideDiagWinningComb.add(`${i} ${j}`);
        ++count;
    }
    count = 1;
    while (coord.i + count < squares.length &&
            coord.j - count >= 0) {
        let i = coord.i + count, j = coord.j - count;
        if (squares[i][j] !== symbol) break;
        sideDiagWinningComb.add(`${i} ${j}`);
        ++count;
    }

    if (isFull(squares)) {
        winningComb.add("full");
        return winningComb;
    }

    winningComb.add(`${coord.i} ${coord.j}`)

    if (verticalWinningComb.size >= 4) {
        concat(winningComb, verticalWinningComb);
    } if (horizontalWinningComb.size >= 4) {
        concat(winningComb, horizontalWinningComb);
    } if (mainDiagWinningComb.size >= 4) {
        concat(winningComb, mainDiagWinningComb);
    } if (sideDiagWinningComb.size >= 4) {
        concat(winningComb, sideDiagWinningComb);
    }

    if (winningComb.size == 1) {
        return new Set();
    }

    return winningComb;

}

function isFull(squares) {
    for (let i = 0; i < squares.length; i++) {
        for (let j = 0; j < squares[i].length; j++) {
            if (!squares[i][j]) {
                return false;
            }
        }
    }
    return true;
}

function concat(set1, set2) {
    for (let el of set2) {
        set1.add(el);
    }
}

export function findCurrentElement(currentSquares, prevSquares) {
    if (currentSquares && prevSquares) {
        for (let i = 0; i < currentSquares.length; i++) {
            for (let j = 0; j < currentSquares[i].length; j++) {
                if (currentSquares[i][j] !== prevSquares[i][j]) {
                    return {i: i, j: j};
                }
            }
        }
    }
    return null;
}
