import Dashboard from "../components/Dashboard";
import SearchBar from "../components/SearchBar";
import useMovies from "../helpers/useMovies";

function MainPage() {
	const { movies, loading, error } =
		useMovies("dead");

	console.log(movies);

	return (
		<div className="main-page">
			<SearchBar />
			<Dashboard
				movies={movies}
				loading={loading}
				error={error}
			/>
		</div>
	);
}

export default MainPage;
