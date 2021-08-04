import styles from "./Info.module.css";
import Steps from "./Steps/Steps";
import Status from "./Status/Status";

const Info = props => {

    return (
        <div className={styles.info}>
            <Status status={props.status}/>
            <Steps
                history={props.history}
                jumpTo={props.jumpTo}
            />
        </div>
    );
}

export default Info;