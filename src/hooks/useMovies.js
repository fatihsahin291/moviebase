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
export default function useMovies(
	searchOptions,
	page = 1
) {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const {
		searchTerm: sterm,
		searchYear: syear,
		searchType: stype,
	} = searchOptions;

	useEffect(() => {
		const getMovies = async () => {
			try {
				setLoading(true);

				const response = await fetch(
					`https://www.omdbapi.com/?apikey=${KEY}&s=${sterm.trim()}&y=${syear}&type=${stype}&page=${page}`
				);
				const data = await response.json();

				if (data.Search) {
					setMovies(data.Search);
				} else {
					setMovies([]);
				}
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};
		getMovies();
	}, [sterm, syear, stype, page]);

	return { movies, loading, error };
}
