import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import "./styles/App.scss";

import ProtectedRoute from "./pages/ProtectedRoute";

import MainPage from "./pages/MainPage";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./components/Dashboard";
import useMovies from "./hooks/useMovies";
import MovieDetails from "./components/MovieDetails";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// staleTime: 60 * 1000,
			staleTime: 0,
		},
	},
});

function App() {
	const [searchOptions, setSearchOptions] = useState({
		searchTerm: "",
		searchYear: "",
		searchType: "",
	});

	const [page, setPage] = useState(1);

	const { movies, loading, error } = useMovies(searchOptions, page);

	return (
		<div className="app">
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />

				<BrowserRouter>
					<Routes>
						<Route path="signup" element={<SignupPage />} />

						<Route path="login" element={<LoginPage />} />

						<Route
							index
							path="/"
							element={<Navigate replace to="dashboard" />}
						/>

						<Route
							path="dashboard"
							element={
								<ProtectedRoute>
									<MainPage setSearchOptions={setSearchOptions} />
								</ProtectedRoute>
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
							<Route path="movie/:movieID" element={<MovieDetails />} />
						</Route>

						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
		</div>
	);
}

export default App;
