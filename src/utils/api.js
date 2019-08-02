import { _getUsers, _saveNewUser } from './_DATA';

export function getInitialData() {
  return Promise.all([_getUsers()]).then(([users]) => ({
    users,
  }));
}

export function addUser(user) {
  return _saveNewUser(user);
}
