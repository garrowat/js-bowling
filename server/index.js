const path = require('path');
const express = require('express');
const port = 3001;

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log('Listening on port', port));