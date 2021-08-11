import { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { MODE } from '../../constants';
import UsersTable from './UsersTable';
import UserForm from './UserForm';
import NotFound from '../NotFound';

function Users() {
  const { path } = useRouteMatch();
  const [users, setUsers] = useState([]);
  return (
    <div className="users">
      <Switch>
        <Route exact path={path}>
          <UsersTable users={users} setUsers={setUsers} />
        </Route>

        <Route exact path={`${path}/user/:mode(${MODE.VIEW}|${MODE.CREATE}|${MODE.EDIT}|${MODE.CLONE})/:id?`}>
          <UserForm users={users} setUsers={setUsers} />
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default Users;
