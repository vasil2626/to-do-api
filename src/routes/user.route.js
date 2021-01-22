const express = require('express'),
        validator = require('../middlewares/validator.middleware'),
        auth = require('../middlewares/auth.middleware'),
        userController = require('../controllers/user.controller'),
        userRouter = express.Router();

/**
 * Аll routes start with '/user'
 **/

// Create a new user
userRouter.post('/', validator('user-create'), userController.create);

// Update token
userRouter.put('/:id/token', userController.updateToken);

// Update user info
userRouter.put('/', auth, validator('user-update'), userController.update);

// Get user info
userRouter.get('/', auth, userController.getInfo);

// Sign in
userRouter.post('/sign-in', validator('user-sign-in'), userController.signIn);

//  Sign out
userRouter.post('/sign-out', validator('user-sign-out'), userController.signOut);

module.exports = userRouter;
