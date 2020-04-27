const morgan = require('morgan');
const path = require('path');
const express = require('express');
const app = express();
const index = require('./routes');
const port = process.env.PORT || 5005;

app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'pug');

app.use(morgan('short'));
app.use(express.static(path.join(__dirname, 'Public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(index);

app.listen(port);
