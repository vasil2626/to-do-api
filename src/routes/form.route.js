const express = require('express'),
        validator = require('../middlewares/validator.middleware'),
        auth = require('../middlewares/auth.middleware'),
        formController = require('../controllers/form.controller'),
        formRouter = express.Router();

/**
 * Аll routes start with '/form'
 **/

// Send contact form
formRouter.post('/', validator('form'), formController.create);

module.exports = formRouter;
