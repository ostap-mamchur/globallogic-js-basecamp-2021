import { Formik, Form } from 'formik';
import Input from '../../../../common/Formik/Input';
import { MODE } from '../../../../constants';
import { NAME, TEMPERATURE, ISWATER } from '../../constans';
import Buttons from './Buttons';
import Checkbox from './Checkbox';

function FormContainer({initialValues, onSubmit, mode}) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Input name={NAME} label='Name' disabled={mode === MODE.VIEW} required={true}/>
        <Input name={TEMPERATURE} type="number" label={"Temperature"} disabled={mode === MODE.VIEW} required={true}/>
        <Checkbox
          name={ISWATER}
          label='IsWater'
          disabled={mode === MODE.VIEW}
        />
        <br/>
        <Buttons mode={mode}/>
      </Form>
    </Formik>
  );
}

export default FormContainer;