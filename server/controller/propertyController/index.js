"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Property = require('../../models/property');
var multer = require('multer');
var imageUploader = require('../../utils/imageUploader');
function createProperty(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, prop, imagepath;
        return __generator(this, function (_a) {
            data = req.body;
            data.uuid = Date.now() + Math.floor(100000 + Math.random() * 900000);
            prop = new Property(data);
            try {
                imagepath = imageUploader(req.body.image);
            }
            catch (error) {
                res.json(error).status(400);
            }
            prop.image = imagepath;
            prop.save().then(function (data) {
                res.json({
                    message: 'Successfully saved new Property',
                    data: data,
                });
            });
            return [2 /*return*/];
        });
    });
}
function getProperty(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var prop, _a, _b, page, _c, limit, property, count, err_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    prop = new Property();
                    _a = req.query, _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 10 : _c;
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, Property.find()
                            .limit(limit * 1)
                            .skip((page - 1) * limit)
                            .exec()];
                case 2:
                    property = _d.sent();
                    return [4 /*yield*/, Property.countDocuments()];
                case 3:
                    count = _d.sent();
                    res.json({
                        currentPage: page,
                        property: property,
                        totalPages: Math.ceil(count / limit),
                        nextPage: page + 1,
                    });
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _d.sent();
                    console.error(err_1.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function searchProperty(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, page, _c, limit, start_date, end_date, _d, location, property, count, err_2;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _a = req.query, _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 10 : _c, start_date = _a.start_date, end_date = _a.end_date, _d = _a.location, location = _d === void 0 ? '' : _d;
                    page = parseInt(page);
                    console.log(new Date(start_date).toISOString(), new Date(end_date).toISOString(), location);
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, Property.find({
                            $or: [{ city: new RegExp(location, 'gi') }, { country: new RegExp(location, 'gi') }],
                            $and: [
                                {
                                    start_date: {
                                        $lte: new Date(start_date).toISOString(),
                                    },
                                },
                                {
                                    end_date: {
                                        $lte: new Date(end_date).toISOString(),
                                    },
                                },
                            ],
                        })
                            // .limit(limit * 1)
                            // .skip((page - 1) * limit)
                            .exec()];
                case 2:
                    property = _e.sent();
                    console.log(property, 'property');
                    return [4 /*yield*/, Property.countDocuments()];
                case 3:
                    count = _e.sent();
                    res.json({
                        currentPage: page,
                        property: property,
                        totalPages: Math.ceil(count / limit),
                        nextPage: page + 1,
                    });
                    return [3 /*break*/, 5];
                case 4:
                    err_2 = _e.sent();
                    console.error(err_2.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function addComment(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dataToUpdate;
        return __generator(this, function (_a) {
            dataToUpdate = {
                user: {
                    name: req.body.name,
                    location: req.body.location,
                },
                rating: req.body.rating,
                comment: req.body.comment,
            };
            Property.findOneAndUpdate({ uuid: req.body.uuid }, { $push: { comments: dataToUpdate } }, function (error, success) {
                if (error) {
                    res.json(error).status(400);
                }
                else {
                    res.json(success);
                }
            });
            return [2 /*return*/];
        });
    });
}
function getPropertyDetail(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var property, totalRating_1, overallRating;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Property.findOne({
                        uuid: req.params.id,
                    }).exec()];
                case 1:
                    property = _a.sent();
                    if (property) {
                        totalRating_1 = 0;
                        property.comments.forEach(function (element) {
                            totalRating_1 += element.rating;
                        });
                        overallRating = Math.floor(totalRating_1 / property.comments.length);
                        res.json({
                            property: property,
                            overallRating: overallRating,
                        });
                    }
                    else {
                        res.json({
                            message: 'No Property Found',
                        }).status(404);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function latestProperty(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, limit, property;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.query.limit, limit = _a === void 0 ? 3 : _a;
                    return [4 /*yield*/, Property.find({}, {}, { sort: { updatedAt: -1 } })
                            .limit(limit * 1)
                            .exec()];
                case 1:
                    property = _b.sent();
                    res.json(property);
                    return [2 /*return*/];
            }
        });
    });
}
module.exports = {
    createProperty: createProperty,
    getProperty: getProperty,
    searchProperty: searchProperty,
    addComment: addComment,
    getPropertyDetail: getPropertyDetail,
    latestProperty: latestProperty,
};
