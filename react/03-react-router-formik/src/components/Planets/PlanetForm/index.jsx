import { useHistory, useParams } from 'react-router-dom';
import { MODE } from '../../../constants';
import { useEffect } from 'react';
import planetApi from '../../../api/planetApi';
import { getRequestPayload } from '../../Users/UserForm/converter';
import { getInitialValues } from './converter';
import FormContainer from './FormContainer';
import { ID } from '../../Users/constants';

function PlanetForm({ planets, setPlanets }) {

  const { mode, id } = useParams();
  const history = useHistory();
  const planet = planets.find(pl => pl.id === Number(id));

  useEffect(() => {
    if (mode === MODE.VIEW || mode === MODE.EDIT || mode === MODE.CLONE) {
      if (!planet) {
        planetApi
          .getPlanet(Number(id))
          .then(planet => setPlanets(prevUsers => [...prevUsers, planet]))
          .catch(err => window.alert(err.message));
      }
    }
  }, [id, mode, planet, setPlanets]);

  const handleSubmit = async values => {
    try {
      const payload = getRequestPayload(values);
      console.log(values);
      switch (mode) {
        case MODE.CREATE:
        case MODE.CLONE:
          await planetApi.createPlanet(payload);
          break;
        case MODE.EDIT:
          await planetApi.editPlanet(payload);
          break;
        default:
          console.error(`Failed to execute this request for ${mode} mode`);
      }

    } catch (err) {
      window.alert(err.message);
    }
    history.push("/planets");
  };

  const initialValues = getInitialValues(planet);

  return (
    <FormContainer
      key={`${mode}:${initialValues[ID]}`}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      mode={mode}
    />
  );
}

export default PlanetForm;