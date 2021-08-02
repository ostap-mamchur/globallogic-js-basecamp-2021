import styles from "./Info.module.css";

const Info = props => {
    return (
        <div className={styles.info}>
            <div className={styles.info__status}>{props.status}</div>
            <div className={styles.info__toggle}>
                <button onClick={props.onClick}>Turn over</button>
            </div>
            <ul className={styles.info__steps}>{props.moves}</ul>
        </div>
    );
}

export default Info;