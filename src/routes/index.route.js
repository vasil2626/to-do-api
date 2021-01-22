'use strict';

const express = require('express'),
      indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', (req, res) => {
  res.status(200).send('Root route not exists, please move to /client path');
});

module.exports = indexRouter;
