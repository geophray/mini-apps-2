const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
  res.send('Get request received at "/test" endpoint');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
