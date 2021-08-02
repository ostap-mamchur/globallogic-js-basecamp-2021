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

export default Board;