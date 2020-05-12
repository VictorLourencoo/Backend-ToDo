const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/dbToDo';
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB conectado');
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = mongoose;
