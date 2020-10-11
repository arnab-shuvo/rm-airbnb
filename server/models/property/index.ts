import mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
	{
		uuid: {
			type: String,
		},
		title: {
			type: String,
			required: 'Title is required',
			minlength: 4,
			maxlength: 150,
		},
		description: {
			type: String,
			required: 'Body is required',
			minlength: 4,
			maxlength: 2000,
		},
		start_date: {
			type: Date,
			required: 'Start Date is required',
		},
		end_date: {
			type: Date,
			required: 'End Date is required',
		},
		price: {
			type: Number,
			required: 'Price is required',
		},
		property_type: {
			type: String,
			required: 'Type is required',
		},
		city: {
			type: String,
			required: 'City is required',
		},
		country: {
			type: String,
			required: 'City is required',
		},
		image: {
			type: [String],
			required: 'Image is required',
		},
		comments: {
			type: [
				{
					user: {
						type: {
							name: {
								type: String,
								required: 'userName is required',
							},
							location: {
								type: String,
								required: 'location is required',
							},
						},
					},
					rating: {
						type: Number,
					},
					comment: {
						type: String,
					},
				},
			],
		},
	},
	{
		toJSON: {
			transform(doc, ret) {
				delete ret._id;
				delete ret.__v;
			},
		},
		timestamps: true,
	},
);

module.exports = mongoose.model('property', postSchema);
