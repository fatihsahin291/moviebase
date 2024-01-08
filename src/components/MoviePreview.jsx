function MoviePreview({ movie }) {
	const { Title, Year, Type, Poster } = movie;

	return (
		<div className="movie-preview">
			<img
				src={Poster}
				alt={Title}
				className="movie-img"
			/>
			<div className="movie-info">
				<h3 className="movie-title">{Title}</h3>
				<p className="movie-year">
					Year(s): {Year}
				</p>
				<p className="movie-type">Type: {Type}</p>
			</div>
		</div>
	);
}

export default MoviePreview;
