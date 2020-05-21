const express = require('express');
const connectToDataBase = require('./config/database');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const taskRoute = require('./routes/Task.Routes');

app.use('/task', taskRoute);
app.listen(3333, () => {
  console.log('API ONLINE NA PORTA 3333');
});
