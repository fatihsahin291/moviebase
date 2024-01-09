import { useEffect, useState } from "react";
import { KEY } from "../utils/constants";

export default function useMovies(
	searchOptions,
	page = 1
) {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const { searchTerm, searchYear, searchType } =
		searchOptions;

	useEffect(() => {
		const getMovies = async () => {
			try {
				setLoading(true);

				const response = await fetch(
					`https://www.omdbapi.com/?apikey=${KEY}&s=${searchTerm.trim()}&y=${searchYear}&type=${searchType}&page=${page}`
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
	}, [searchTerm, searchYear, searchType, page]);

	return { movies, loading, error };
}
