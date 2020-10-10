export default (type: string, str?: Date) => {
	let date = str ?? new Date();
	if (str) {
		return `${date.getDate().toString().length !== 2 ? `0${date.getDate()}` : date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} `;
	} else {
		return type;
	}
};
