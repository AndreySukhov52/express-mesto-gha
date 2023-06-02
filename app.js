const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, /**  за 15 минут */
  max: 100, /** можно совершить максимум 100 запросов с одного IP */
});
/** подключаемся к серверу mongo */
mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
  useNewUrlParser: true,
});

app.use(express.json());
app.use(cookieParser());
const { PORT = 3000 } = process.env;

/** подключаем мидлвары, роуты и всё остальное... */

app.use(limiter);

app.use(routes);

app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`app слушает порт: ${PORT}`);
});
