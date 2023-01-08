const express = require('express');
const morgan = require('morgan');
const v1 = require('./routes/v1');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('combined'));
}

app.use(express.json());

app.use('/api/v1', v1);

// at last
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
// });

module.exports = app;
