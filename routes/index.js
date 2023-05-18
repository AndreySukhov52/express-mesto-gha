const router = require('express').Router();
const userRoutes = require('./users');
const cardRoutes = require('./cards');
const { StatusCodes } = require('http-status-codes');

router.use('/users', userRoutes);
router.use('/cards', cardRoutes);
router.use('*', handleNotFound);

const handleNotFound = (req, res) => {
  res.status(StatusCodes.NOT_FOUND).send({ message: 'Page Not Found' });
};

module.exports = router;
