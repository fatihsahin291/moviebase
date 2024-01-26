import LoginForm from "../components/LoginForm";
import { login } from "../services/apiAuth";

function LoginPage() {
	async function handleLogin() {
		const { user, session } = await login({
			email: "test@example.com",
			password: "password",
		});

		return { user, session };
	}

	const { user, session } = handleLogin();
	console.log("user", user);
	console.log("session", session);

	return (
		<div className="login-page">
			<LoginForm />
		</div>
	);
}

export default LoginPage;
