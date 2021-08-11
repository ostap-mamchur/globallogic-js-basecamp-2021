import {Field, ErrorMessage} from 'formik';
import "./styles.css"

function Checkbox({name, label, validate, disabled}) {
  return (
    <div className="Checkbox">
      <label>
        <span>{label}</span>{" "}
        <Field type="checkbox" name={name} validate={validate} disabled={disabled}/>
      </label>
    </div>
  )
}

export default Checkbox;