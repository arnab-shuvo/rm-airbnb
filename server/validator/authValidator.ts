const jwt = require('jsonwebtoken');
module.exports = (req: any, res: any, next: any) => {
	jwt.verify(req.headers.authorization, 'top_secret', (err: any, user: any) => {
		if (err) {
			res.json('Unauthorized Request').status(401);
		} else {
			req.user = user;
			next();
		}
	});
};
