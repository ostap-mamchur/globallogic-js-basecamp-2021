import styles from "./Education.module.css";
import Title from "../Title/Title";

const Education = () => {
    return (
        <div className={styles.education}>
            <Title content="Education"/>
            <ul className={styles.education__list}>
                <li>Ivan Franko National University of Lviv,
                     <span className={styles.time}> 2019 - present</span>
                </li>
            </ul>
        </div>
    );
}

export default Education;