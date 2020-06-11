const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
