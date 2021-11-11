const express = require('express')
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.json({message: 'Welcome!' });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});