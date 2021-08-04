import styles from "./Game.module.css";
import Board from "./Board/Board";
import {useState} from "react";
import Info from "./Info/Info";
import {calculateWinner, findCurrentElement} from "../../utils/calculateWinner";

const Game = () => {
    const [history, setHistory] = useState([
        {squares: Array(19).fill(Array(19).fill(null))}
    ]);
    const [numberStep, setNumberStep] = useState(0);

    const current = history[numberStep];
    const prev = history[numberStep - 1];
    const coord = findCurrentElement(current.squares, prev?.squares);
    const winningComb = calculateWinner(current.squares, coord);

    let status;
    if (winningComb.has("full")) {
        status = "Draw";
    } else if (winningComb.size >= 5) {
        status = 'Winner: ' + current.squares[coord.i][coord.j];
    } else {
        status = 'Next player: ' + (numberStep % 2 === 0 ? '🟢' : '🔴');
    }

    function handleClick(i, j) {
        const newHistory = history.slice(0, numberStep + 1);
        const current = newHistory[newHistory.length - 1];
        const squares = current.squares.map(square => square.slice());

        if (squares[i][j] || winningComb.size) {
            return;
        }
        squares[i][j] = numberStep % 2 === 0 ? '🟢' : "🔴";

        setHistory([...newHistory, {squares: squares}]);
        setNumberStep(numberStep + 1);
    }

    function jumpTo(step) {
        setNumberStep(step);
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
                    history={history}
                    jumpTo={step => jumpTo(step)}
                />
            </div>
        </div>
    );
}

export default Game;