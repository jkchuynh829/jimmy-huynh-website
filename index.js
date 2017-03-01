const express = require('express');
const path = require('path');

const PORT = 1337;

const app = express();

app.use(express.static(path.join('./public/')));

app.listen(PORT, () => console.log(`Server listening on ${ PORT }`));