import { useEffect, useState } from "react";

const KEY = "f84fc31d";

export default function useMovies(search) {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getMovies = async () => {
			try {
				setLoading(true);

				const response = await fetch(
					`https://www.omdbapi.com/?apikey=${KEY}&s=${search}`
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
	}, [search]);

	return { movies, loading, error };
}
