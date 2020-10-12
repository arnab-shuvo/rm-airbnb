export default (comments: IPropertyComment[]) => {
	let actualRating: number;
	if (comments.length) {
		let totalRating = 0;
		comments.forEach((comment: any) => {
			totalRating += comment.rating;
		});
		actualRating = Math.floor(totalRating / comments.length);
	} else {
		actualRating = 0;
	}

	return actualRating;
};
