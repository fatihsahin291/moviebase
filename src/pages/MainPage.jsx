import SearchBar from "../components/SearchBar";
import useMovies from "../hooks/useMovies";
import { Outlet } from "react-router-dom";

function MainPage({
	searchOptions,
	setSearchOptions,
}) {
	const { movies, loading, error } = useMovies(
		searchOptions
	);

	console.log(movies);

	return (
		<div className="main-page">
			<SearchBar
				searchOptions={searchOptions}
				setSearchOptions={setSearchOptions}
			/>
			<Outlet />
		</div>
	);
}

export default MainPage;
