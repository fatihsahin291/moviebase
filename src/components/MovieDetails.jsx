import useMovieDetails from "../hooks/useMovieDetails";

function MovieDetails() {
	const { data } = useMovieDetails("tt1520211");

	console.log(data);

	return <div></div>;
}

export default MovieDetails;
