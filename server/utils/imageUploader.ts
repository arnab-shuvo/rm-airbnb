import fs = require('fs');

module.exports = (files: any) => {
	const allImagePath: string[] = [];
	files.forEach((file: any, index: number) => {
		let fileData = file.split(';base64,');
		const base64Data = fileData[1];
		let imageType = fileData[0].split('/')[1];

		imageType = imageType === 'jpeg' ? 'jpg' : 'png';
		const imagePath = `uploads/property_${Date.now()}_${index}.${imageType}`;

		fs.writeFile(imagePath, base64Data, 'base64', (err: any) => {
			if (err) console.log(err);
		});
		allImagePath.push(imagePath);
	});
	return allImagePath;
};
