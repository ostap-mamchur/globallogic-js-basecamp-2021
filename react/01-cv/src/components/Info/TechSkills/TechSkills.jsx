import styles from "./TechSkills.module.css";
import Title from "../Title/Title";

const TechSkills = () => {
    return (
        <div className={styles.skills}>
            <Title content="Technical skills"/>
            <ul className={styles.skills__list}>
                <li>Programming languages: JavaScript, C++, C#</li>
                <li>Technologies and framework: HTML, CSS, React, NodeJS</li>
                <li>Databases: superficial knowledge</li>
                <li>IDE: VS Code, WebStorm</li>
            </ul>
        </div>
    );
}

export default TechSkills;