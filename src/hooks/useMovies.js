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

	const fetchMovies = async () => {
		setLoading(true);
		setError(null);

		try {
			const response = await fetch(
				`https://www.omdbapi.com/?apikey=${KEY}&s=${sterm}&y=${syear}&type=${stype}&page=${page}`
			);
			const data = await response.json();

			if (data.Response === "False") {
				throw new Error(data.Error);
			}

			setMovies(data.Search);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchMovies();
	}, [sterm, syear, stype, page]);

	return { movies, loading, error };
}
