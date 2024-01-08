import useMovies from "../helpers/useMovies";

function Dashboard() {
	const { movies, loading, error } =
		useMovies("dead");

	console.log(movies);

	return <div></div>;
}

export default Dashboard;
