const express = require('express');
const router = express.Router();
const UserModel = require('../model/userModel');

router.post('/', async (req, res) => {
	console.log(req.body);

	const { name, email, password, cpassword } = req.body;

	// check if pass and cpass match
	if (password !== cpassword) {
		return res
			.status(409)
			.json({ success: false, error: 'Password does not match' });
	}

	try {
		const isAlreadyRegistered = await UserModel.findOne({ email });

		if (isAlreadyRegistered) {
			return res
				.status(409)
				.json({ success: false, error: 'User Already Exist' });
		}
		// console.log(isAlreadyRegistered);
		const newUser = new UserModel({ name, email, password });
		// const addToDB = await newUser.save();
		await newUser.save();
		// console.log(addToDB);
		res
			.status(201)
			.json({ success: true, msg: 'User registered successfully!!' });
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
