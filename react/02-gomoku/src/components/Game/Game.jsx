import styles from "./Game.module.css";
import Board from "./Board/Board";
import {useState} from "react";
import Info from "./Info/Info";

const Game = () => {

    const [history, setHistory] = useState([
        {squares: Array(19).fill(Array(19).fill(null))}
    ]);
    const [numberStep, setNumberStep] = useState(0);
    const [isGrowth, setIsGrowth] = useState(false);

    function handleClick(i, j) {
        const newHistory = history.slice(0, numberStep + 1);
        const current = newHistory[newHistory.length - 1];
        const squares = current.squares.map(square => square.slice());

        const prev = newHistory[newHistory.length - 2];
        const coord = findCurrentElement(squares, prev?.squares);
        let winningComb = new Set();

        if (coord) {
            winningComb = calculateWinner(current.squares, coord);
        }
        if (squares[i][j] || winningComb.size) {
            return;
        }
        squares[i][j] = numberStep % 2 === 0 ? 'X' : 'O';

        setHistory([...newHistory, {squares: squares}]);
        setNumberStep(numberStep + 1);
    }

    function jumpTo(step) {
        setNumberStep(step);
    }

    const current = history[numberStep];
    const prev = history[numberStep - 1];
    const coord = findCurrentElement(current.squares, prev?.squares);

    let status = "Next player: X";

    let winningComb = new Set();
    if (coord) {
        winningComb = calculateWinner(current.squares, coord);
        if (winningComb.has("full")) {
            status = "Draw";
        } else if (winningComb.size == 5) {
            status = 'Winner: ' + current.squares[coord.i][coord.j];
        } else {
            status = 'Next player: ' + (numberStep % 2 === 0 ? 'X' : 'O');
        }
    }

    const moves = history.map((step, move) => {
        const desc = move ? 'Go to move #' + move :
            'Go to game start';
        return (
            <li>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    if (!isGrowth) {
        moves.reverse();
    }

    function handleToggle() {
        setIsGrowth(!isGrowth);
    }

    return (
        <div className={styles.game}>
            <div className={styles.game__board}>
                <Board currentCoord={`${coord?.i} ${coord?.j}`}
                       winningComb={winningComb}
                       squares={current.squares}
                       onClick={(i, j) => handleClick(i, j)}/>
            </div>
            <div className={styles.game__info}>
                <Info
                    status={status}
                    onClick={() => handleToggle()}
                    moves={moves}
                />
            </div>
        </div>
    );
}

function findCurrentElement(currentSquares, prevSquares) {
    if (currentSquares && prevSquares) {
        for (let i = 0; i < currentSquares.length; i++) {
            for (let j = 0; j < currentSquares[i].length; j++) {
                if (currentSquares[i][j] !== prevSquares[i][j]) {
                    return {i: i, j: j};
                }
            }
        }
    }
}

function calculateWinner(squares, coord) {
    const symbol = squares[coord.i][coord.j];

    //vertical
    let winningComb = new Set();
    winningComb.add(`${coord.i} ${coord.j}`);
    for (let i = coord.i - 1; i >= 0; i--) {
        if (squares[i][coord.j] !== symbol) break;
        winningComb.add(`${i} ${coord.j}`);
        if (winningComb.size == 5) return winningComb;
    }
    for (let i = coord.i + 1; i < squares.length; i++) {
        if (squares[i][coord.j] !== symbol) break;
        winningComb.add(`${i} ${coord.j}`);
        if (winningComb.size == 5) return winningComb;
    }

    //horizontal
    winningComb.clear();
    winningComb.add(`${coord.i} ${coord.j}`);
    for (let j = coord.j - 1; j >= 0; j--) {
        if (squares[coord.i][j] !== symbol) break;
        winningComb.add(`${coord.i} ${j}`);
        if (winningComb.size == 5) return winningComb;
    }
    for (let j = coord.j + 1; j < squares.length; j++) {
        if (squares[coord.i][j] !== symbol) break;
        winningComb.add(`${coord.i} ${j}`);
        if (winningComb.size == 5) return winningComb;
    }

    //main diagonal
    winningComb.clear();
    winningComb.add(`${coord.i} ${coord.j}`);
    let count = 1;
    while (coord.i - count >= 0 && coord.j - count >= 0) {
        let i = coord.i - count, j = coord.j - count;
        if (squares[i][j] !== symbol) break;
        winningComb.add(`${i} ${j}`);
        if (winningComb.size == 5) return winningComb;
        ++count;
    }
    count = 1;
    while (coord.i + count < squares.length &&
           coord.j + count < squares.length) {
        let i = coord.i + count, j = coord.j + count;
        if (squares[i][j] !== symbol) break;
        winningComb.add(`${i} ${j}`);
        if (winningComb.size == 5) return winningComb;
        ++count;
    }

    //side diagonal
    winningComb.clear();
    winningComb.add(`${coord.i} ${coord.j}`);
    count = 1;
    while (coord.i - count >= 0 &&
           coord.j + count < squares.length) {
        let i = coord.i - count, j = coord.j + count;
        if (squares[i][j] !== symbol) break;
        winningComb.add(`${i} ${j}`);
        if (winningComb.size == 5) return winningComb;
        ++count;
    }
    count = 1;
    while (coord.i + count < squares.length &&
           coord.j - count >= 0) {
        let i = coord.i + count, j = coord.j - count;
        if (squares[i][j] !== symbol) break;
        winningComb.add(`${i} ${j}`);
        if (winningComb.size == 5) return winningComb;
        ++count;
    }

    if (isFull(squares)) {
        winningComb.clear();
        winningComb.add("full");
        return winningComb;
    }

    return new Set();
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

export default Game;