import { Formik, Form } from 'formik';

import Input from '../../../../common/Formik/Input';
import { MODE } from '../../../../constants';
import { AGE, ROLE, USERNAME } from '../../constants';
import Buttons from './Buttons';
import Select from '../../../../common/Formik/Select';

function FormContainer({ initialValues, onSubmit, mode, roles }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Input name={USERNAME} label='Username' disabled={mode === MODE.VIEW} required={true} />
        <Input
          name={AGE}
          type='number'
          label='Age'
          disabled={mode === MODE.VIEW}
          required={true}
          validate={value => {
            if (value < 16 || value > 110) {
              return `Age is not appropriate`;
            }
          }}
        />
        <Select
          label='Role'
          name={ROLE}
          disabled={mode === MODE.VIEW}
          options={roles.map(role => ({ label: role, value: role }))}
        />
        <br />
        <Buttons mode={mode} />
      </Form>
    </Formik>
  );
}

export default FormContainer;
