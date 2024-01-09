import SearchBar from "../components/SearchBar";
import { Outlet } from "react-router-dom";

function MainPage({
	searchOptions,
	setSearchOptions,
}) {
	return (
		<div className="main-page">
			<SearchBar
				searchOptions={searchOptions}
				setSearchOptions={setSearchOptions}
			/>
			<Outlet />
		</div>
	);
}

export default MainPage;
