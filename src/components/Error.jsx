function Error({ error }) {
	console.log(error);
	return (
		<div className="error">
			<h1 className="error-title">Error</h1>
			<p className="error-message">
				{error.message}
			</p>
		</div>
	);
}

export default Error;
