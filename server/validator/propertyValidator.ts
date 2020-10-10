module.exports = (req: any, res: any, next: any) => {
	//Validate post creation rule from schema
	req.check('title', 'Title required').notEmpty();
	req.check('description', 'Title required').notEmpty();
	req.check('start_date', 'Available Date required').notEmpty();
	req.check('property_type', 'Type required').notEmpty();
	req.check('end_date', 'Available Date required').notEmpty();
	req.check('city', 'City required').notEmpty();
	req.check('country', 'Country required').notEmpty();
	req.check('image', 'Image required').notEmpty();

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
