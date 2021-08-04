import styles from "./Steps.module.css";
import {useState} from "react";

const Steps = (props) => {
    const [isGrowth, setIsGrowth] = useState(false);

    const moves = props.history.map((step, move) => {
        const desc = move ? 'Go to move #' + move :
            'Go to game start';
        return (
            <li>
                <button onClick={() => props.jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    if (isGrowth) {
        moves.reverse();
    }

    function handleToggle() {
        setIsGrowth(!isGrowth);
    }

    return (
        <div className={styles.steps}>
            <div className={styles.steps__toggle}>
                <button onClick={handleToggle}>Reverse</button>
            </div>
            <ul className={styles.steps__list}>{moves}</ul>
        </div>
    );
}

export default Steps;