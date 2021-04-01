import React, { useState } from "react";
import "../login.css";

const Login = () => {
	const [state, setState] = useState({
		username: "",
		password: "",
		errorMessage: "",
	});

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (state.username === "" || state.password === "") {
			return setState({
				errorMessage: "Name, position and nickname fields are required.",
			});
		}
	};

	return (
		<form classname="loginForm" onSubmit={handleSubmit}>
			<div className="form-group">
				<label className="username">Username: </label>
				<br />
				<input
					type="text"
					onChange={handleChange}
					value={state.username}
					name="username"
					id="username"
				/>
			</div>
			<div className="form-group">
				<label className="password">Password: </label>
				<br />
				<input
					type="password"
					onChange={handleChange}
					value={state.password}
					name="password"
					id="password"
				/>
			</div>
			<button className="loginBTN" onSubmit={handleSubmit} type="submit">
				Login
			</button>
		</form>
	);
};
export default Login;
