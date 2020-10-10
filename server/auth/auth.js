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
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require("passport");
var localStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var JWTstrategy = require('passport-jwt').Strategy;
var ExtractJWT = require('passport-jwt').ExtractJwt;
//Create a passport middleware to handle user registration
passport.use('signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, function (email, password, done) { return __awaiter(void 0, void 0, void 0, function () {
    var isExistUser, user, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                email = email.toLowerCase();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, User.findOne({ email: email })];
            case 2:
                isExistUser = _a.sent();
                if (!!isExistUser) return [3 /*break*/, 4];
                return [4 /*yield*/, User.create({ email: email, password: password })];
            case 3:
                user = _a.sent();
                //Send the user information to the next middleware
                console.log('in the reg');
                return [2 /*return*/, done(null, {
                        message: 'Registration Successful',
                        status: true,
                        user: user,
                    })];
            case 4: return [2 /*return*/, done(null, { status: false }, { message: 'Email already exist' })];
            case 5:
                error_1 = _a.sent();
                done(error_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); }));
//Create a passport middleware to handle User login
passport.use('login', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, function (email, password, done) { return __awaiter(void 0, void 0, void 0, function () {
    var user, validate, body, token, date, expire_at, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, User.findOne({ email: email })];
            case 1:
                user = _a.sent();
                if (!user) {
                    //If the user isn't found in the database, return a message
                    return [2 /*return*/, done(null, false, { message: 'User not found' })];
                }
                return [4 /*yield*/, user.isValidPassword(password)];
            case 2:
                validate = _a.sent();
                if (!validate) {
                    return [2 /*return*/, done(null, false, { message: 'Wrong Password' })];
                }
                body = { _id: user._id, email: user.email };
                token = jwt.sign({ user: body }, 'top_secret', {
                    expiresIn: '2d',
                });
                date = new Date();
                expire_at = date.setDate(date.getDate() + 2);
                //Send the user information to the next middleware
                return [2 /*return*/, done(null, {
                        message: 'Logged in Successfully',
                        userInfo: {
                            user: user.email,
                            token: token,
                            expire_at: expire_at,
                        },
                    })];
            case 3:
                error_2 = _a.sent();
                return [2 /*return*/, done(error_2)];
            case 4: return [2 /*return*/];
        }
    });
}); }));
passport.use(new JWTstrategy({
    secretOrKey: 'TOP_SECRET',
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token'),
}, function (token, done) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log(token, 'tokentokentokentokentokentokentokentokentokentokentoken');
        try {
            return [2 /*return*/, done(null, token.user)];
        }
        catch (error) {
            done(error);
        }
        return [2 /*return*/];
    });
}); }));
