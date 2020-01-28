const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(express.static('./client/dist'));

const port = 3003;
app.listen(port, () => console.log(`The server is Running on port ${port}!`));