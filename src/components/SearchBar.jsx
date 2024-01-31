import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

function SearchBar({ setSearchOptions }) {
	const [showFilterMenu, setShowFilterMenu] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();

	const queryParams = new URLSearchParams(location.search);
	const sterm = queryParams.get("sterm");
	const syear = queryParams.get("syear");
	const stype = queryParams.get("stype");

	const [tempSearchOptions, setTempSearchOptions] = useState({
		searchTerm: sterm ? sterm : "",
		searchYear: syear || syear !== "all" ? "" : syear,
		searchType: stype || stype !== "all" ? "" : stype,
	});

	function handleSearch() {
		setSearchOptions(tempSearchOptions);

		navigate(
			`?sterm=${
				tempSearchOptions.searchTerm ? tempSearchOptions.searchTerm : "none"
			}&syear=${
				tempSearchOptions.searchYear ? tempSearchOptions.searchYear : "all"
			}&stype=${
				tempSearchOptions.searchType ? tempSearchOptions.searchType : "all"
			}&page=1`
		);
	}

	return (
		<div className="searchbar">
			<button className="searchbar-btn" onClick={() => navigate(-1)}>
				&lang; Back
			</button>
			<button className="searchbar-btn" onClick={() => navigate(1)}>
				Forward &rang;
			</button>

			<input
				type="text"
				spellCheck="false"
				className="searchbar-input"
				placeholder="Search for a movie..."
				value={tempSearchOptions.searchTerm}
				onChange={(e) =>
					setTempSearchOptions({
						...tempSearchOptions,
						searchTerm: e.target.value,
					})
				}
			/>

			<div className="filter-menu-wrapper">
				<div
					className="filter-menu-icon"
					onClick={() => setShowFilterMenu(!showFilterMenu)}
				>
					<FiFilter />
				</div>

				{showFilterMenu && (
					<div className="filter-menu">
						<div className="filter-menu-item">
							<label htmlFor="search-year">Year:</label>
							<input
								type="text"
								id="search-year"
								name="search-year"
								value={
									tempSearchOptions.searchYear === "all"
										? ""
										: tempSearchOptions.searchYear
								}
								onChange={(e) =>
									setTempSearchOptions({
										...tempSearchOptions,
										searchYear: e.target.value,
									})
								}
							/>
						</div>

						<div className="filter-menu-item">
							<label htmlFor="search-type">Type:{"  "}</label>
							<select
								id="search-type"
								name="search-type"
								value={
									tempSearchOptions?.searchType === "all" ||
									!tempSearchOptions.searchType
										? ""
										: tempSearchOptions.searchType
								}
								onChange={(e) =>
									setTempSearchOptions({
										...tempSearchOptions,
										searchType: e.target.value,
									})
								}
							>
								<option value="">All</option>
								<option value="movie">Movie</option>
								<option value="series">Series</option>
								<option value="episode">Episode</option>
							</select>
						</div>
					</div>
				)}
			</div>

			<button
				className="searchbar-btn"
				onClick={() =>
					setTempSearchOptions({
						...tempSearchOptions,
						searchTerm: "",
						searchYear: "",
						searchType: "",
					})
				}
			>
				Clear
			</button>

			<button className="searchbar-btn" onClick={handleSearch}>
				Search
			</button>
		</div>
	);
}

export default SearchBar;
