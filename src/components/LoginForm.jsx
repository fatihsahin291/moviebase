function LoginForm({ handleLogin }) {
	return (
		<div className="login-form">
			<form>
				<label htmlFor="email">Email</label>
				<input type="email" id="email" name="email" />

				<label htmlFor="password">Password</label>
				<input type="password" id="password" name="password" />

				<button type="submit" onClick={(e) => handleLogin(e)}>
					Login
				</button>
			</form>
		</div>
	);
}

export default LoginForm;
