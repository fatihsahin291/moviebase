import { KEY } from "../utils/constants";

export default async function useMovieDetails(
	id
) {
	try {
		const response = await fetch(
			`https://www.omdbapi.com/?apikey=${KEY}&i=${id}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
}
