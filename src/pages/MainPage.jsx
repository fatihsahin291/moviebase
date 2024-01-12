import SearchBar from "../components/SearchBar";
import { Outlet } from "react-router-dom";

function MainPage({ setSearchOptions }) {
	return (
		<div className="main-page">
			<SearchBar
				setSearchOptions={setSearchOptions}
			/>
			<Outlet />
		</div>
	);
}

export default MainPage;
