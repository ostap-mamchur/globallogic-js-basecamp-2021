import { INITIAL_STATE } from '../constans';


export const getInitialValues = planet => (planet ? ({
  ...planet,
  temperature: +planet.temperature
}) : INITIAL_STATE);