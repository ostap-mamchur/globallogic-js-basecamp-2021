import styles from "./Status.module.css";

const Status = props => {
    return (
        <div className={styles.status}>{props.status}</div>
    );
}

export default Status;