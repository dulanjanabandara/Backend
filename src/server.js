// const https = require("https");
const http = require('http');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const app = require('./app');
const mongoConnect = require('./services/mongo.service');

const port = process.env.PORT || 8001;
const server = http.createServer(app);

async function startServer() {
  try {
    mongoose.set('strictQuery', false);
    await mongoConnect();
    
    server.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
startServer();
