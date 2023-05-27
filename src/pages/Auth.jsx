import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Form = ({
	username,
	setUsername,
	password,
	setPassword,
	label,
	onSubmit,
}) => {
	return (
		<div className="auth-container">
			<form onSubmit={onSubmit}>
				<h2>{label}</h2>
				<div className="form-group">
					<label htmlFor="username">Username :</label>
					<input
						type="text"
						value={username}
						id="username"
						onChange={(event) => {
							setUsername(event.target.value);
						}}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password :</label>
					<input
						type="password"
						value={password}
						id="password"
						onChange={(event) => {
							setPassword(event.target.value);
						}}
					/>
				</div>
				<button type="submit">{label}</button>
			</form>
		</div>
	);
};

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const [_, setCookies] = useCookies(['access_token']);

	const onSubmitHandler = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.post('http://localhost:3001/auth/login', {
				username,
				password,
			});

			console.log(response);

			setCookies('access_token', response.data.token);
			window.localStorage.setItem('userID', response.data.userID);
			navigate('/');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<Form
			username={username}
			password={password}
			setUsername={setUsername}
			setPassword={setPassword}
			label="Login"
			onSubmit={onSubmitHandler}
		/>
	);
};

const Register = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const onSubmitHandler = async (event) => {
		event.preventDefault();

		try {
			await axios.post('http://localhost:3001/auth/register', {
				username,
				password,
			});
			alert('Registration completed! now login.!');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<Form
			username={username}
			password={password}
			setUsername={setUsername}
			setPassword={setPassword}
			label="Register"
			onSubmit={onSubmitHandler}
		/>
	);
};

function Auth() {
	return (
		<div className="auth">
			<Login />
			<Register />
		</div>
	);
}

export default Auth;
