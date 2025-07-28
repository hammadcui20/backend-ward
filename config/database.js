
const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect('mongodb+srv://munrohamza:xxha9IaDSwIdHw04@cluster0.jde5j6i.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
  });
};

module.exports = connectDatabase;
