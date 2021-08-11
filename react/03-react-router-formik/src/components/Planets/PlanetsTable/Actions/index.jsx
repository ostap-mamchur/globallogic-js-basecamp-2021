import {useRouteMatch, useHistory} from 'react-router-dom';

import {MODE} from '../../../../constants';

function Actions({id}) {
  const {url} = useRouteMatch();
  const history = useHistory();

  const redirect = mode => () => {
    history.push(`${url}/planet/${mode}/${id}`);
  };

  return (
    <div className="Actions">
      <button onClick={redirect(MODE.VIEW)}>View</button>
      {' '}
      <button onClick={redirect(MODE.EDIT)}>Edit</button>
      {' '}
      <button onClick={redirect(MODE.CLONE)}>Clone</button>
    </div>
  );
}

export default Actions;
