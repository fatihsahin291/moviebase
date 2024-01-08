import {
	BrowserRouter,
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
						path="/"
						element={<MainPage />}
					></Route>

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
