import useMovies from "../helpers/useMovies";
import MoviePreview from "./MoviePreview";

function Dashboard() {
	const { movies, loading, error } =
		useMovies("dead");

	console.log(movies);

	return (
		<div className="dashboard">
			{loading && <div>Loading...</div>}
			{error && <div>Error: {error}</div>}
			{movies &&
				movies.map((movie) => (
					<MoviePreview
						key={movie.MovieID}
						movie={movie}
					/>
				))}
		</div>
	);
}

export default Dashboard;
