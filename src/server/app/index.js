const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/assets', express.static(path.join(__dirname, '../public')));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '../views/index.html'));
});

app.listen(3000, (err) => {
  if(err) {
    console.error(err);
    return;
  }

  console.log('server started');
});
