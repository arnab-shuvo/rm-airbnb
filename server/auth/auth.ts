import passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const jwt = require('jsonwebtoken');

//Create a passport middleware to handle user registration
passport.use(
	'signup',
	new localStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
		},
		async (email:any, password:any, done:any) => {
			email = email.toLowerCase();
			try {
				//Find the user associated with the email provided by the user
				const isExistUser = await User.findOne({ email });
				if (!isExistUser) {
					//Save the information provided by the user to the the database
					const user = await User.create({ email, password });
					//Send the user information to the next middleware
					console.log('in the reg');
					
					return done(null, {
						message: 'Registration Successful',
						status: true,
						user,
					});
				}
				return done(
					null,
					{ status: false },
					{ message: 'Email already exist' },
				);
			} catch (error) {
				done(error);
			}
		},
	),
);

//Create a passport middleware to handle User login
passport.use(
	'login',
	new localStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
		},
		async (email:any, password:any, done:any) => {			
			try {
				//Find the user associated with the email provided by the user
				const user = await User.findOne({ email });
				if (!user) {
					//If the user isn't found in the database, return a message
					return done(null, false, { message: 'User not found' });
				}
				//Validate password and make sure it matches with the corresponding hash stored in the database
				//If the passwords match, it returns a value of true.
				const validate = await user.isValidPassword(password);
				if (!validate) {
					return done(null, false, { message: 'Wrong Password' });
				}
				const body = { _id: user._id, email: user.email };
				const token = jwt.sign({ user: body }, 'top_secret', {
					expiresIn: '2d',
				});
				let date = new Date();
				const expire_at = date.setDate(date.getDate() + 2);
				//Send the user information to the next middleware
				return done(null, {
					message: 'Logged in Successfully',
					userInfo: {
						user: user.email,
						token: token,
						expire_at: expire_at,
					},
				});
			} catch (error) {
				return done(error);
			}
		},
	),
);
