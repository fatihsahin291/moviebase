import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import "./styles/App.scss";
import MainPage from "./pages/MainPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
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
						element={<MainPage />}
					/>
					<Route path=":searchTerm" />

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
