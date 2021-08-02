import styles from "./Board.module.css";
import Square from "./Square/Square";

const Board = props => {
    return (
        <div className={styles.board}>
            <div className={styles.board__grid}>
                {props.squares.map((row, i) =>
                    row.map((square, j) => {
                        return <Square
                            isCurrent={props.currentCoord === `${i} ${j}`}
                            isWinning={props.winningComb.has(`${i} ${j}`)}
                            value={square}
                            onClick={() => props.onClick(i, j)}/>
                    })
                )}
            </div>
        </div>
    );
}

function calculateWinner(squares, i, j) {
    const symbol = "X";
    let winningCombination = [{i, j}];

    for (let ih = i - 1; ih >= 0; ih--) {
        if (winningCombination.length === 5) {
            return winningCombination;
        }
        if (squares[ih][j] === symbol) {
            winningCombination.push({ih, j})
        }
    }
    debugger;
    return null;
}

export default Board;