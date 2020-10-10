export default (comments: IPropertyComment[]) => {
	let totalRating = 0;
	comments.forEach((comment: any) => {
		totalRating += comment.rating;
	});
	let actualRating = totalRating / comments.length;
	return actualRating !== 0 ? actualRating : 3;
};
