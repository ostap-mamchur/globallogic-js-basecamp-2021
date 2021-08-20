import { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { MODE } from '../../constants';
import UsersTable from './UsersTable';
import UserForm from './UserForm';
import NotFound from '../NotFound';

function Users() {
  const { path } = useRouteMatch();

  return (
    <div className="users">
      <Switch>
        <Route exact path={path}>
          <UsersTable />
        </Route>
        <Route
          exact
          path={`${path}/user/:mode(${MODE.VIEW}|${MODE.CREATE}|${MODE.EDIT}|${MODE.CLONE})/:id?`}
        >
          <UserForm />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Users;
