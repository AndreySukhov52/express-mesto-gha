const userRouters = require('express').Router();
const {
  getUsers, getUserById, createUser, updateUser, updateAvatar,
} = require('../controllers/users');

/** Роуты пользователя */
userRouters.get('/users', getUsers);
userRouters.post('/users', createUser);
userRouters.get('/users/:userId', getUserById);
userRouters.patch('/users/me', updateUser);
userRouters.patch('/users/me/avatar', updateAvatar);
userRouters.get('/', getUsers);
userRouters.post('/', createUser);
userRouters.get('/:userId', getUserById);
userRouters.patch('/me', updateUser);
userRouters.patch('/me/avatar', updateAvatar);

module.exports = userRouters;