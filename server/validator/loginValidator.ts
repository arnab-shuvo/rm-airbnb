module.exports = (req: any, res: any, next: any) => {
	//Validate post creation rule from schema
	req.check('email', 'Email required').notEmpty();
	req.check('email', 'Provide a valid email id').isEmail();
	req.check('password', 'Password required').notEmpty();
	req.check('password', 'Password must be 8-20 characters long').isLength({
		min: 8,
		max: 20,
	});

	const errors = req.validationErrors();

	if (errors) {
		return res.status(400).json(errors);
	}
	next();
};
