const express = require('express');
const connectToDataBase = require('./config/database');
const app = express();
app.use(express.json());

const taskRoute = require('./routes/Task.Routes');

app.use('/task', taskRoute);
app.listen(3333, () => {
  console.log('API ONLINE NA PORTA 3333');
});
