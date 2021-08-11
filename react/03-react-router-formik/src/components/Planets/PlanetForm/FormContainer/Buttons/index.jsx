import { useHistory } from 'react-router-dom';
import { useFormikContext } from 'formik';
import { MODE } from '../../../../../constants';
import api from '../../../../../api/planetApi';
import { getRequestPayload } from '../../../../Users/UserForm/converter';

function Buttons({mode}) {
  const history = useHistory();
  const {values, isSubmitting} = useFormikContext();

  return (
    <div>
      {(mode === MODE.CREATE || mode === MODE.EDIT || mode === MODE.CLONE) && (
        <button type="submit" disabled={isSubmitting}>
          Save
        </button>
      )}
      {(mode === MODE.EDIT && (
        <button type="reset" onClick={async () => {
          try {
            const payload = getRequestPayload(values);
            await api.deletePlanet(payload);
          } catch (err) {
            window.alert(err.message);
          }
          history.push('/planets')
        }}>
          Delete
        </button>
      ))}
      <button type="button" onClick={() => history.push('/planets')}>
        Cancel
      </button>
    </div>
  );
}

export default Buttons;