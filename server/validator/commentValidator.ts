module.exports = (req: any, res: any, next: any) => {
	//Validate post creation rule from schema
	req.check('name', 'Name required').notEmpty();
	req.check('location', 'Location required').notEmpty();
	req.check('comment', 'Comment required').notEmpty();
	req.check('uuid', 'UUI required').notEmpty();
	req.check('rating', 'rating required').notEmpty();

	const errors = req.validationErrors();

	if (errors) {
		let errorResponse: any[] = [];
		errors.map((error: any) => {
			errorResponse.push({
				param: error.param,
				message: error.msg,
			});
		});
		return res.status(400).json({
			message: 'Valdiation Failed',
			error: errorResponse,
		});
	}
	next();
};
