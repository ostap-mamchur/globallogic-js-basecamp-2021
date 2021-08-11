import {ErrorMessage, useField} from "formik";


function Select({ label, name, disabled, validate, options, required }) {

    const validateInput = value => {
        if (required && value === "") {
            return "Required";
        } if (typeof validate === "function") {
            return validate(value);
        }
    }

    const [field] = useField({name, validate: validateInput});
    return (
        <div className="Select">
            <label>
                <div>{label}{required && "*"}</div>
                <select disabled={disabled} {...field}>
                    {options.map((option, index) => (<option key={index} label={option.label}>{option.value}</option>))}
                </select>
            </label>
            <ErrorMessage name={name} className="error" component="div"/>
        </div>
    );
}

export default Select;