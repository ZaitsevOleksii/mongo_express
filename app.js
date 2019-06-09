const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const upRoutes = require('./api/routes/signups');
const inRoutes = require('./api/routes/signins');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/solodb', (err) => {
  if (err) throw err;
  console.log('Successfully connected to .');
});


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
      return res.status(200).json({});
  }
  return next();
});


app.use('/signups', upRoutes);
app.use('/signins', inRoutes);




app.use ((req, res, next) => {
  const error = new Error ('Not found');
  error.status = 404;
  next (error);
});



app.use((error, req, res, next) =>
{
  res.status(error.status || 500);
  res.json({
    error: {
		message: error.message
	}

  });
});

module.exports = app;

