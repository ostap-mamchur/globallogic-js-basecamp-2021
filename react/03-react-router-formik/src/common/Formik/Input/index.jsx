import {useField, ErrorMessage} from 'formik';
import './styles.scss';

function Input({name, label, validate, type = 'text', disabled = false, required, checked = false}) {

    const validateInput = value => {
        if (required && value === "") {
            return "Required";
        } if (typeof validate === "function") {
            return validate(value);
        }
    }

    const [field] = useField({name, validate: validateInput});
    return (
        <div className="Input">
            <label>
                <div>{label}{required && "*"}</div>
                <input type={type} disabled={disabled} {...field} checked={checked}/>
            </label>

            <ErrorMessage name={name} className="error" component="div"/>
        </div>
    );
}

export default Input;
