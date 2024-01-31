import { useEffect, useState } from "react";
import { KEY } from "../utils/constants";

/**
 * Custom hook for fetching movies from the OMDB API.
 *
 * @param {Object} searchOptions - The search options for filtering movies.
 * @param {string} searchOptions.searchTerm - The search term for movie titles.
 * @param {string} searchOptions.searchYear - The search year for movie release.
 * @param {string} searchOptions.searchType - The search type for movie category.
 * @param {number} page - The page number for pagination.
 * @returns {Object} - An object containing movies, loading state, and error state.
 */
export default function useMovies(searchOptions, page = 1) {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const {
		searchTerm: sterm,
		searchYear: syear,
		searchType: stype,
	} = searchOptions;

	console.log("useMovies", searchOptions, page);

	const getMovies = async () => {
		try {
			console.log("getMovies", sterm, syear, stype, page);
			setLoading(true);

			const apiKey = KEY;

			const response = await fetch(
				`https://www.omdbapi.com/?apikey=${apiKey}&s=${sterm.trim()}&y=${syear}&type=${stype}&page=${page}`
			);
			const data = await response.json();

			if (data.Search) {
				setMovies(data.Search);
				localStorage.setItem("movies", JSON.stringify(data.Search));
			} else {
				setMovies([]);
			}
			setLoading(false);
		} catch (error) {
			setError(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		getMovies();
	}, [sterm, syear, stype, page]);

	return { movies, loading, error };
}
