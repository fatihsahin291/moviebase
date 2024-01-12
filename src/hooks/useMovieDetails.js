import { useEffect, useState } from "react";
import { KEY } from "../utils/constants";

/**
 * Custom hook to fetch movie details from the OMDB API.
 *
 * @param {string} id - The ID of the movie.
 * @returns {Object} - An object containing the movie details, loading state, and error state.
 */
export default function useMovieDetails(id) {
	const [movie, setMovie] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getMovieDetails = async () => {
			try {
				setLoading(true);

				const response = await fetch(
					`https://www.omdbapi.com/?apikey=${KEY}&i=${id}`
				);
				const data = await response.json();

				setMovie(data);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};
		getMovieDetails();
	}, [id]);

	return { movie, loading, error };
}
