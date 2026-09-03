import Router from 'express';

import { signupValidatior } from './auth.validator.js';
import { signup } from './auth.controllder.js';
import router from '../../routes/index.js';

const AuthRoute = Router();

AuthRoute.post('/signup', signupValidatior, signup);

export default AuthRoute;