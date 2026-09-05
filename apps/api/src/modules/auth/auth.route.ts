import Router from 'express';

import { signupValidatior } from './auth.validator.js';
import { signup } from './auth.controllder.js';

import { verifyEmailValidator } from './auth.validator.js';
import {verifyEmail} from './auth.controllder.js';

const AuthRoute = Router();

// Signup route
AuthRoute.post('/signup', signupValidatior, signup);

// Verify email route
AuthRoute.post('/verify-email', verifyEmailValidator, verifyEmail);

export default AuthRoute;