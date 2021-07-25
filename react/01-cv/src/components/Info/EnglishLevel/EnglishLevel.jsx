import styles from "./EnglishLevel.module.css";
import Title from "../Title/Title";

const EnglishLevel = () => {
    return (
        <div className={styles.english}>
            <Title content="English level"/>
            <ul className={styles.english__list}>
                <li>Pre-Intermediate (A2)</li>
            </ul>
        </div>
    );
}

export default EnglishLevel;
