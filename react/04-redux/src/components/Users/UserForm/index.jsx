import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import userApi from '../../../api/userApi';
import { MODE } from '../../../constants';
import { ID } from '../constants';
import FormContainer from './FormContainer';
import { getInitialValues, getRequestPayload } from './converter';
import { useDispatch, useSelector } from 'react-redux';
import { addNewUser, fetchUser, updateUser } from '../../../redux/usersSlice';
import { fetchRoles } from '../../../redux/rolesSlice';

function UserForm() {
  const { mode, id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector(state =>
    state.users.users.find(user => user.id == id));

  useEffect(() => {
    if (mode === MODE.VIEW || mode === MODE.EDIT || mode === MODE.CLONE) {
      if (!user) {
        dispatch(fetchUser(id));
      }
    }
  }, [id, mode, user, dispatch]);

  const roles = useSelector(state => state.roles.roles);
  const rolesStatus = useSelector(state => state.roles.status);
  useEffect(() => {
    if (rolesStatus === 'idle') {
      dispatch(fetchRoles());
    }
  }, [dispatch, roles]);

  const handleSubmit = async values => {
    try {
      const payload = getRequestPayload(values);
      debugger;
      switch (mode) {
        case MODE.CREATE:
        case MODE.CLONE:
          await dispatch(addNewUser(payload));
          break;
        case MODE.EDIT:
          await dispatch(updateUser(payload));
          break;
        default:
          console.error(`Failed to execute this request for ${mode} mode`);
      }
    } catch (err) {
      window.alert(err.message);
    }

    history.push('/users');
  };

  const initialValues = getInitialValues(user);
  return (
    <FormContainer
      key={`${mode}:${initialValues[ID]}`}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      mode={mode}
      roles={roles}
    />
  );
}

export default UserForm;
