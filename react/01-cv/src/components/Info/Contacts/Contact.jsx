import styles from "./Contact.module.css";
import Title from "../Title/Title";
import phone from "./phone.svg";
import location from "./location.svg"
import email from "./email.svg";

const Contact = () => {
    return (
        <div className={styles.contact}>
            <Title content="Contact"/>
            <div className={styles.links}>
                <a href="https://www.google.com/maps/place/%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8326046,23.8721529,11z/data=!3m1!4b1!4m5!3m4!1s0x473add7c09109a57:0x4223c517012378e2!8m2!3d49.839683!4d24.029717">
                    <img className={styles.links__icon} src={location}/>
                    <span className={styles.links__label}>Lviv, Ukraine</span>
                </a>
                <a href="tel:+380730396895">
                    <img  src={phone}/>
                    <span className={styles.links__label}>(073) 039-68-95</span>
                </a>
                <a href="mailto:mamchurostap26@gmail.com">
                    <img className={styles.links__icon} src={email}/>
                    <span className={styles.links__label}>mamchurostap26@gmail.com</span>
                </a>
            </div>
        </div>
    );
}

export default Contact;