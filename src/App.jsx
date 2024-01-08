import "./App.css";
import useMovies from "./helpers/useMovies";

function App() {
	const { movies, isLoading, error } =
		useMovies("dead");

	console.log(movies);

	return (
		<>
			<div>
				<ul>
					{movies.map((movie, i) => {
						return <li key={i}>{movie.Title}</li>;
					})}
				</ul>
			</div>
		</>
	);
}

export default App;
