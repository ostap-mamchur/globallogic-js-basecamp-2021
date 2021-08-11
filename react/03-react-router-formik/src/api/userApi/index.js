import { wait, createGetId, getTimestamp, throwError } from '../utisl';
import data from './db';

const getId = createGetId(data.length);

const api = {
  // GET /users
  async getUsers() {
    await wait(1000);

    console.log('GET /users', data);
    return data;
  },
  // GET /users/:id
  async getUser(id) {
    await wait();

    const user = data.find(u => u.id === id);

    if (user) {
      console.log(`GET /users/${user.id}`, user);
      return user;
    } else {
      throwError(id);
    }
  },
  // POST /users
  async createUser(user) {
    await wait();

    const newUser = {
      ...user,
      id: getId(),
      timestamp: getTimestamp(),
    };

    data.push(newUser);

    console.log('POST /users', newUser);
    return newUser;
  },
  // PUT /users
  async editUser(user) {
    await wait();

    const index = data.findIndex(u => u.id === user.id);

    if (~index) {
      data[index] = {
        ...user,
        timestamp: getTimestamp(),
      };

      console.log('PUT /users', data[index]);
      return data[index];
    } else {
      throwError(user.id);
    }
  },
  // DELETE /users
  async deleteUser(user) {
    await wait();

    const index = data.findIndex(u => u.id === user.id);

    if (~index) {
      console.log('DELETE /users', user);
      return data.splice(index, 1);
    } else {
      throwError(user.id);
    }
  },
  // GET /roles
  async getRoles() {
    await wait();
    const ROLES = ['user', 'super-user', 'admin'];

    console.log('GET /roles', ROLES);
    return ROLES;
  },
};

export default api;
