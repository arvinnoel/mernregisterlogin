const express = require('express')


const { registerUser, loginUser } = require('../controllers/signup_controller')


const signupRouter = express. Router()


signupRouter.post('/register', registerUser)

signupRouter.post('/login', loginUser)


module.exports = signupRouter;

