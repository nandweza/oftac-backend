"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordById = exports.updateUser = exports.createUser = exports.getUserByUsername = exports.getUsers = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});
exports.UserModel = mongoose_1.default.model('User', UserSchema);
const getUsers = () => exports.UserModel.find();
exports.getUsers = getUsers;
const getUserByUsername = (username) => exports.UserModel.findOne({ username });
exports.getUserByUsername = getUserByUsername;
const createUser = (values) => new exports.UserModel(values)
    .save().then((user) => user.toJSON());
exports.createUser = createUser;
const updateUser = (id, values) => exports.UserModel.findByIdAndUpdate(id, values);
exports.updateUser = updateUser;
const resetPasswordById = (id, values) => exports.UserModel.findByIdAndUpdate(id, values);
exports.resetPasswordById = resetPasswordById;
//# sourceMappingURL=user.js.map