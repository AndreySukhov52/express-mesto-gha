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
router.post('/signup', validationSignUp, createUser);
router.post('/signin', validationSignIn, login);

// router.use(('*', auth, (req, res, next) => {
//   next(new NotFoundError('Запрашиваемый ресурс не найден'));
// });
router.use('*', auth, () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

module.exports = router;