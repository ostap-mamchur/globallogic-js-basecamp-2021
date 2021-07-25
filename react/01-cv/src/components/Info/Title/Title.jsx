import styles from "./Title.module.css";

const Title = (props) => {
    return (
        <div className={styles.title}>
            <h3>{props.content}</h3>
        </div>
    );
}

export default Title;