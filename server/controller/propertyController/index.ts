const Property = require('../../models/property');
const multer = require('multer');
const imageUploader = require('../../utils/imageUploader');

async function createProperty(req: any, res: any) {
	let data = req.body;
	data.uuid = Date.now() + Math.floor(100000 + Math.random() * 900000);
	const prop = new Property(data);
	try {
		var imagepath: any = imageUploader(req.body.image);
	} catch (error) {
		res.json(error).status(400);
	}
	prop.image = imagepath;
	prop.save().then((data: any) => {
		res.json({
			message: 'Successfully saved new Property',
			data,
		});
	});
}

async function getProperty(req: any, res: any) {
	const prop = new Property();
	const { page = 1, limit = 10 } = req.query;
	try {
		let property = await Property.find()
			.limit(limit * 1)
			.skip((page - 1) * limit)
			.exec();

		const count = await Property.countDocuments();

		res.json({
			currentPage: page,
			property,
			totalPages: Math.ceil(count / limit),
			nextPage: page + 1,
		});
	} catch (err) {
		console.error(err.message);
	}
}

async function searchProperty(req: any, res: any) {
	let { page = 1, limit = 10, start_date, end_date, location } = req.query;
	page = parseInt(page);
	console.log(start_date, end_date);

	try {
		let property = await Property.find({
			$or: [{ city: new RegExp(location, 'gi') }, { country: new RegExp(location, 'gi') }],
			$and: [
				{
					start_date: {
						$gt: start_date,
					},
					end_date: {
						$lt: end_date,
					},
				},
			],
		})
			.limit(limit * 1)
			.skip((page - 1) * limit)
			.exec();

		const count = await Property.countDocuments();

		res.json({
			currentPage: page,
			property,
			totalPages: Math.ceil(count / limit),
			nextPage: page + 1,
		});
	} catch (err) {
		console.error(err.message);
	}
}

async function addComment(req: any, res: any) {
	let dataToUpdate = {
		user: {
			name: req.body.name,
			location: req.body.location,
		},
		rating: req.body.rating,
		comment: req.body.comment,
	};
	Property.findOneAndUpdate({ uuid: req.body.uuid }, { $push: { comments: dataToUpdate } }, function (error: any, success: any) {
		if (error) {
			res.json(error).status(400);
		} else {
			res.json(success);
		}
	});
}

async function getPropertyDetail(req: any, res: any) {
	let property = await Property.findOne({
		uuid: req.params.id,
	}).exec();
	if (property) {
		let totalRating = 0;
		property.comments.forEach((element: any) => {
			totalRating += element.rating;
		});
		const overallRating = Math.floor(totalRating / property.comments.length);
		res.json({
			property,
			overallRating,
		});
	} else {
		res.json({
			message: 'No Property Found',
		}).status(404);
	}
}

async function latestProperty(req: any, res: any) {
	const { limit = 3 } = req.query;
	let property = await Property.find({}, {}, { sort: { updatedAt: -1 } })
		.limit(limit * 1)
		.exec();
	res.json(property);
}

module.exports = {
	createProperty,
	getProperty,
	searchProperty,
	addComment,
	getPropertyDetail,
	latestProperty,
};
