const express = require('express');
const path = require('path');
const cors = require('cors');

/*Remove after routes/models are established*/
/* eslint-disable no-unused-vars */
const db = require('../database/dbIndex.js');
/* eslint-disable no-unused-vars */

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/test', (req, res) => {
  res.send('This is the default server response');
})

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));