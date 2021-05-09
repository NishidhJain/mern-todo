const express = require('express');
const router = express.Router();
const UserModel = require('../model/userModel');

router.post('/', async (req, res) => {
	console.log(req.body);
	const { email, password } = req.body;
	try {
		const isUserExist = await UserModel.findOne({ email });
		console.log(isUserExist);

		if (!isUserExist || password !== isUserExist.password) {
			return res
				.status(404)
				.json({ success: false, error: 'Invalid Credentials' });
		}
		// console.log(isUserExist.password);
		res.status(200).json({ success: true, msg: 'Login Successfull!!' });
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
