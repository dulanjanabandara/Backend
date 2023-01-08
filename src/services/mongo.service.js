const mongoose = require('mongoose');

const MONGO_URL = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error('DB Connecting Error: ', err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

module.exports = mongoConnect;
