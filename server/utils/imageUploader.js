"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
module.exports = function (files) {
    var allImagePath = [];
    files.forEach(function (file, index) {
        var fileData = file.split(';base64,');
        var base64Data = fileData[1];
        var imageType = fileData[0].split('/')[1];
        imageType = imageType === 'jpeg' ? 'jpg' : 'png';
        var imagePath = "uploads/property_" + Date.now() + "_" + index + "." + imageType;
        fs.writeFile(imagePath, base64Data, 'base64', function (err) {
            if (err)
                console.log(err);
        });
        allImagePath.push(imagePath);
    });
    return allImagePath;
};
