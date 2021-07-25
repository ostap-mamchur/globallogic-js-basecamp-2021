import styles from "./Header.module.css";
import avatar from "./avatar.jpg"

const Header = () => {
    return (
        <header className={styles.introduction}>
            <div className={styles.avatar}>
                <img src={avatar}/>
            </div>
            <div className={styles.info}>
                <h1 className={styles.info__name}>Ostap Mamchur</h1>
                <p className={styles.info__position}>Full-stack JS developer</p>
            </div>
        </header>
    );
}

export default Header;