import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function Navbar() {
	const [cookies, setCookies] = useCookies(['access_token']);
	const navigate = useNavigate();

	const logoutHandler = () => {
		setCookies('access_token', '');
		window.localStorage.removeItem('userID');
		navigate('/auth');
	};

	return (
		<div className="navbar">
			<Link to="/">Home</Link>
			<Link to="/auth">Auth</Link>
			<Link to="/createRecipes">createRecipes</Link>
			{!cookies.access_token ? (
				<Link to="/saveRecipes">saveRecipes</Link>
			) : (
				<button onClick={logoutHandler}>logout</button>
			)}
		</div>
	);
}

export default Navbar;
