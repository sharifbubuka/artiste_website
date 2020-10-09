const express = require('express');
const chalk = require('chalk');

const fanroute = require('./Routes/fanRoutes');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.use('/', fanroute);

const server = app.listen(PORT, () => {
  console.log('Node server is running on port ' + chalk.yellowBright(PORT));
});