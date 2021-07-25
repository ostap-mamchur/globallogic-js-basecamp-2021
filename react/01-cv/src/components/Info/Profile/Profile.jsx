import styles from "./Profile.module.css";
import Title from "../Title/Title";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <Title content="Personal profile"/>
            <p>I am a flexible person seeking
                employment which will allow
                development, growth and
                make use of my existing
                skills. Also I am a quick to
                learn and ready to try
                something new.</p>
        </div>
    );
}

export default Profile;