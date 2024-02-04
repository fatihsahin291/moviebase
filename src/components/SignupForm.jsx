import { useNavigate } from "react-router-dom";

import { signUp } from "../services/apiAuth";
// import useSignup from "../features/useSignup";

function SignupForm() {
	const navigate = useNavigate();

	async function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);
		if (!data.email && !data.password && !data["confirm-password"]) {
			return;
		}

		if (data.password !== data["confirm-password"]) {
			return;
		}
		console.log(data);

		const res = await signUp(data);
		console.log(res);

		if (res.user.aud === "authenticated") {
			navigate("/login");
		}
	}

	return (
		<form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
			<label htmlFor="email">Email</label>
			<input type="email" id="email" name="email" />

			<label htmlFor="password">Password</label>
			<input type="password" id="password" name="password" />

			<label htmlFor="confirm-password">Confirm Password</label>
			<input type="password" id="confirm-password" name="confirm-password" />

			<button type="submit">Sign Up</button>
		</form>
	);
}

export default SignupForm;
