const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect('mongodb://BADSHAH:badshah123@ac-bofjood-shard-00-00.9l6ioew.mongodb.net:27017,ac-bofjood-shard-00-01.9l6ioew.mongodb.net:27017,ac-bofjood-shard-00-02.9l6ioew.mongodb.net:27017/eshop?ssl=true&replicaSet=atlas-a12dlq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
