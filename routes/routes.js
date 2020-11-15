const express = require('express');
const router = express.Router();

//Controllers
const userController = require('../Controllers/UserController');

//Models
const User = require('../Models/UserModel');

// const jwt = require('jsonwebtoken');
// const helper = require('../helper.js');

// const validateToken = async (req, res, next) => {
//   if (req.headers["Authorization"]) {
//     try {
//       const accessToken = req.headers["Authorization"];
//       const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
//       if (exp < Date.now().valueOf() / 1000) {
//         return helper.responseJson(res, 401, 'The session has expired', {});
//       }
//       res.locals.user = await User.findById(userId);
//       next();
//     } catch (error) {
//       return helper.responseJson(res, 401, 'The session has expired', {});
//     }
//   } else {
//     return helper.responseJson(res, 401, 'This credentials does not match our records', {});
//   }
// };

router.post('/login', userController.login);
router.post('/signup', userController.register);

module.exports = router;
