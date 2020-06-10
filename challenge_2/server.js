const express = require('express');
const path = require('path');
const axios = require('axios');
const genDate = require('./genDate.js');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
  res.send('Get request received at "/test" endpoint');
});

app.get('/coindesk', (req, res) => {
  const today = genDate();
  axios
    .get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=${today}`)
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((err) => {
      console.error('Error retrieving data from coindesk api.\n', err);
      res.status(500).send('Error retrieving data.');
    });
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
