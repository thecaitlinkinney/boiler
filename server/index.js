const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/../client/dist')))

app.get('/', (req, res) => {
  res.send('This is default server response')
})

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))

