import styles from "./Info.module.css";
import Title from "./Title/Title";
import Profile from "./Profile/Profile";
import Contact from "./Contacts/Contact";
import Education from "./Education/Education";
import EnglishLevel from "./EnglishLevel/EnglishLevel";
import TechSkills from "./TechSkills/TechSkills";

const Info = () => {
    return (
        <div className={styles.info}>
            <div className={`${styles.column_1} ${styles.column}`}>
                <Profile/>
                <Contact/>
                <Education/>
            </div>
            <div className={`${styles.column_2} ${styles.column}`}>
                <EnglishLevel/>
                <TechSkills/>
            </div>
        </div>
    );
}

export default Info;