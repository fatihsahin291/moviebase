import Dashboard from "../components/Dashboard";
import SearchBar from "../components/SearchBar";

function MainPage() {
	return (
		<div className="main-page">
			<SearchBar />
			<Dashboard />
		</div>
	);
}

export default MainPage;
