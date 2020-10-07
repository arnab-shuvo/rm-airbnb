import express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { signUpValidator, loginValidator } = require('../../validator');

router.post(
	'/login',
	loginValidator,
	passport.authenticate('login', { session: false }),
	(req:any, res:any) => {
		res.json(req.user);
	},
);
//When the user sends a post request to this route, passport authenticates the user based on the
//middleware created previously
router.post(
	'/signup',
	signUpValidator,
	passport.authenticate('signup', { session: false }),
	(req:any, res:any) => {
		console.log(req.user);
		
		
		if (req.user.status) {
			res.json({
				message: req.user.message,
				id: req.user.user._id
			});
		}
		else{
			res.status(401).json({
				message: req.authInfo.message,
			});
		}
	},
);

module.exports = router;
