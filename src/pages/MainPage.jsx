import { useState } from "react";
import Dashboard from "../components/Dashboard";
import SearchBar from "../components/SearchBar";
import useMovies from "../helpers/useMovies";

function MainPage() {
	const [searchOptions, setSearchOptions] =
		useState({
			searchTerm: "",
			searchYear: "",
			searchType: "",
		});

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
			<Dashboard
				movies={movies}
				loading={loading}
				error={error}
			/>
		</div>
	);
}

export default MainPage;
