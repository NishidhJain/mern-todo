const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const UserModel = require('./model/userModel');
const app = express();

// Used to configure the file from which variable should be loaded in process.env
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;
const PORT = process.env.PORT;

// to parse the inconing JSON request
app.use(express.json());

// for login route
app.use('/login', require('./routes/login'));

// for register route
app.use('/register', require('./routes/register'));

// using mongoose to connect with the database
mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => {
		console.log('Connection Successfull with Database');
	})
	.catch((err) => {
		console.log('Error in connecting with database : ', err);
	});

app.get('/api/', async (req, res) => {
	try {
		const allDocuments = await UserModel.find();
		// console.log(allDocuments);
		res.json(allDocuments);
	} catch (err) {
		console.log('Err in fetching data', err);
	}
});

app.patch('/api/addtodo', async (req, res) => {
	// get the remainingTasks array from database
	try {
		const todos = await UserModel.findOne({
			_id: '60939fc5de11139efbb919a3',
		}).select({
			remainingTasks: 1,
		});
		console.log(todos.remainingTasks);
		res.json(todos);

		const newTodos = ['Watch Movie', ...todos];

		const updatedTodos = new User();
	} catch (err) {
		console.log('err in updating todo', err);
		res.end();
	}

	// update the remainingTasks array
});

app.post('/api/', async (req, res) => {
	console.log(req.body);
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		return res.status(422).json({ error: 'Please enter all the field' });
	}

	const addData = new UserModel({ name, email, password });

	try {
		const saved = await addData.save();
		console.log(saved);
	} catch (err) {
		console.log('Error in saving data to database', err);
	}
	res.json(req.body);
});

// app.get('/:name', (req, res) => {
// 	console.log(req.params.name);
// 	res.send(`Hello ${req.params.name}!!`);
// });

//to start the server at particular PORT
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}...`);
});
