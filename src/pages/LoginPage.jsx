import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/apiAuth";
import LoginForm from "../components/LoginForm";

function LoginPage() {
	const navigate = useNavigate();

	const [email, setEmail] = useState("test@example.com");
	const [password, setPassword] = useState("password");

	async function handleLogin(e) {
		e.preventDefault();
		console.log(e);
		if (!email && !password) {
			return;
		}

		const { user, session } = await login({
			email,
			password,
		});

		console.log("user", user);
		console.log("session", session);

		if (user.aud === "authenticated") {
			navigate("/dashboard");
		}
	}

	return (
		<div className="login-page">
			<LoginForm handleLogin={handleLogin} />

			<p>
				Don&apos;t have an account? <a href="/signup">Sign up</a> now.
			</p>
		</div>
	);
}

export default LoginPage;
