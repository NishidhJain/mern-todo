const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	completedTasks: {
		type: Array,
		default: [],
	},
	remainingTasks: {
		type: Array,
		default: [],
	},
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
