const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/dbToDo';
const connectToDataBase = async () => {
  const con = await mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log('MongoDB conectado: ', $(con.Collection.host));
};
module.exports = mongoose;
