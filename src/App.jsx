import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import "./styles/App.scss";
import MainPage from "./pages/MainPage";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./components/Dashboard";
import useMovies from "./hooks/useMovies";
import { useState } from "react";
import MovieDetails from "./components/MovieDetails";

function App() {
	const [searchOptions, setSearchOptions] =
		useState({
			searchTerm: "",
			searchYear: "",
			searchType: "",
		});

	const [page, setPage] = useState(1);

	const { movies, loading, error } = useMovies(
		searchOptions,
		page
	);

	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route
						index
						path="/"
						element={
							<Navigate replace to="dashboard" />
						}
					/>

					<Route
						path="dashboard"
						element={
							<MainPage
								setSearchOptions={
									setSearchOptions
								}
							/>
						}
					>
						<Route
							path=""
							element={
								<Dashboard
									movies={movies}
									loading={loading}
									error={error}
									page={page}
									setPage={setPage}
								/>
							}
						/>
						<Route
							path="?sterm=:sterm&syear=:syear&stype:stype&page=:page"
							element={
								<Dashboard
									movies={movies}
									loading={loading}
									error={error}
									page={page}
									setPage={setPage}
								/>
							}
						/>
						<Route
							path="movie/:movieID"
							element={<MovieDetails />}
						/>
					</Route>

					<Route
						path="*"
						element={<PageNotFound />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
