import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
	const [registerDetails, setRegisterDetails] = useState({
		name: '',
		email: '',
		password: '',
		cpassword: '',
	});

	const handleChange = (e) => {
		setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value });
	};

	const handleRegistration = async (e) => {
		e.preventDefault();
		// console.log(registerDetails);

		try {
			const reques = await fetch('/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(registerDetails),
			});
			// console.log(reques);
			const response = await reques.json();

			console.log('rESPONSE IS', response);
		} catch (err) {
			console.log('Err', err);
		}
	};

	return (
		<section
			className='register'
			style={{
				display: 'flex',
				height: '100vh',
				width: '100%',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<h2>Sign Up</h2>
			<form method='POST' onSubmit={handleRegistration}>
				<input
					type='text'
					name='name'
					placeholder='Enter name'
					onChange={handleChange}
					value={registerDetails.name}
					style={{ display: 'block' }}
					required
				/>
				<input
					type='email'
					name='email'
					placeholder='Enter email'
					onChange={handleChange}
					value={registerDetails.email}
					style={{ display: 'block' }}
					required
				/>
				<input
					type='password'
					name='password'
					placeholder='Enter password'
					onChange={handleChange}
					value={registerDetails.password}
					style={{ display: 'block' }}
					required
				/>
				<input
					type='password'
					name='cpassword'
					placeholder='Re-enter password'
					onChange={handleChange}
					value={registerDetails.cpassword}
					style={{ display: 'block' }}
					required
				/>
				<button type='submit'>Register</button>
			</form>
			<p>
				Already have an account? <Link to='/signin'>Sign In</Link>
			</p>
		</section>
	);
}

export default Register;
