import styles from "./Square.module.css";

const Square = props => {
    const winning = props.isWinning ? "winning" : "";
    const current = props.isCurrent ? "current" : "";
    return (
        <button
                className={`${styles.square} ${styles[winning]} ${styles[current]}`}
                onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;