import { useNavigate } from "react-router-dom";

function MoviePreview({ movie }) {
	const { Title, Year, Type, Poster } = movie;

	const navigate = useNavigate();

	function handleClick() {
		navigate(`/dashboard/movie/${movie.imdbID}`);
	}

	return (
		<div className="movie-preview" onClick={handleClick}>
			<img src={Poster} alt={Title} className="movie-img" />
			<div className="movie-info">
				<h3 className="movie-title">{Title}</h3>
				<p className="movie-year">
					{Type === "series" ? "years" : "year"}: {Year}
				</p>
				<p className="movie-type">Type: {Type}</p>
			</div>
		</div>
	);
}

export default MoviePreview;
