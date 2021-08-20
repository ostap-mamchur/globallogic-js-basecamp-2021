import { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { MODE } from '../../../constants';
import { ID, USERNAME, ROLE, TIMESTAMP, AGE } from '../constants';
import Actions from './Actions';
import './index.scss';
import { getDate } from '../UserForm/converter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../redux/usersSlice';

function UsersTable() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  const { url } = useRouteMatch();

  const usersStatus = useSelector(state => state.users.status);
  const error = useSelector(state => state.users.error);

  useEffect(() => {
    if (usersStatus === 'idle') {
      dispatch(fetchUsers());
    }
  }, [usersStatus, dispatch]);

  let content;


  if (usersStatus === "loading") {
    content = <div className="loader">Loading...</div>
  } else if (usersStatus === "succeeded") {
    content = (
      <div className='UsersTable'>
        <Link to={`${url}/user/${MODE.CREATE}`}>Create User</Link>

        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Age</th>
            <th>Role</th>
            <th>Last Updated At</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {users.map(user => (
            <tr key={user[ID]}>
              <td>{user[ID]}</td>
              <td>{user[USERNAME]}</td>
              <td>{user[AGE]}</td>
              <td>{user[ROLE]}</td>
              <td>{getDate(user[TIMESTAMP])}</td>
              <td>
                <Actions id={user[ID]} />
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  } else if (usersStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <div className="Users">{content}</div>
  );
}

export default UsersTable;
