import { useNavigate } from "react-router-dom";

function PageNotFound() {
	const navigate = useNavigate();

	const moveBack = () => {
		navigate(-1);
	};

	return (
		<div className="page-not-found">
			<h1 className="pnf-error-code">404</h1>
			<p className="pnf-title">Page not found</p>

			<button
				className="pnf-btn"
				onClick={moveBack}
			>
				&larr; Go back
			</button>
		</div>
	);
}

export default PageNotFound;
