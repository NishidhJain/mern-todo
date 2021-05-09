import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Login() {
	const history = useHistory();

	const [loginDetail, setLoginDetail] = useState({ email: '', password: '' });

	const handleChange = (e) => {
		setLoginDetail({ ...loginDetail, [e.target.name]: e.target.value });
	};

	const handleLogIn = async (e) => {
		e.preventDefault();
		console.log(loginDetail);

		try {
			const request = await fetch('/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(loginDetail),
			});
			const response = await request.json();
			console.log(response);
			if (response.success) {
				history.push('/');
			}
		} catch (err) {
			console.log('Err in login', err);
		}
	};

	return (
		<section
			className='login'
			style={{
				display: 'flex',
				height: '100vh',
				width: '100%',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<h2>Sign In</h2>
			<form method='POST'>
				<input
					type='text'
					name='email'
					placeholder='Enter email'
					onChange={handleChange}
					value={loginDetail.email}
					style={{ display: 'block' }}
				/>
				<input
					type='password'
					name='password'
					placeholder='enter password'
					onChange={handleChange}
					value={loginDetail.password}
					style={{ display: 'block' }}
				/>
				<button onClick={handleLogIn}>Log In</button>
			</form>
			<p>
				Don't have an account? <Link to='/signup'>Sign Up</Link>
			</p>
		</section>
	);
}

export default Login;
