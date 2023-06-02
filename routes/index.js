const express = require('express');
const { createUser, login } = require('./controllers/users');
const { validationSignIn, validationSignUp } = require('./middlewares/validation');

const router = express.Router();

const userRoutes = require('./users');
const cardRoutes = require('./cards');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/notFound-error');

router.use('/users', auth, userRoutes);
router.use('/cards', auth, cardRoutes);
router.use('*', auth, () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});
app.post('/signup', validationSignUp, createUser);
app.post('/signin', validationSignIn, login);

module.exports = router;
