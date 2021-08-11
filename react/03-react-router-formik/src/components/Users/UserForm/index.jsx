import {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';

import userApi from '../../../api/userApi';
import {MODE} from '../../../constants';
import {ID} from '../constants';
import FormContainer from './FormContainer';
import {getInitialValues, getRequestPayload} from './converter';

function UserForm({users, setUsers}) {
    const {mode, id} = useParams();
    const history = useHistory();
    const user = users.find(user => user.id === Number(id));

    useEffect(() => {
        if (mode === MODE.VIEW || mode === MODE.EDIT || mode === MODE.CLONE) {
            if (!user) {
                userApi
                    .getUser(Number(id))
                    .then(user => setUsers(prevUsers => [...prevUsers, user]))
                    .catch(err => window.alert(err.message));
            }
        }
    }, [id, mode, user, setUsers]);

    const [roles, setRoles] = useState([]);
    useEffect(() => {
        userApi.getRoles().then(setRoles);
    }, [setUsers]);

    const handleSubmit = async values => {
        try {
            debugger;
            const payload = getRequestPayload(values);

            switch (mode) {
                case MODE.CREATE:
                case MODE.CLONE:
                    await userApi.createUser(payload);
                    break;
                case MODE.EDIT:
                    await userApi.editUser(payload);
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
