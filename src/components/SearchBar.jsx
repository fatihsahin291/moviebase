import { useState } from "react";
import { FiFilter } from "react-icons/fi";

function SearchBar({
	searchOptions,
	setSearchOptions,
}) {
	const [showFilterMenu, setShowFilterMenu] =
		useState(false);

	const [
		tempSearchOptions,
		setTempSearchOptions,
	] = useState(searchOptions);

	return (
		<div className="searchbar">
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
					onClick={() =>
						setShowFilterMenu(!showFilterMenu)
					}
				>
					<FiFilter />
				</div>

				{showFilterMenu && (
					<div className="filter-menu">
						<div className="filter-menu-item">
							<label htmlFor="search-year">
								Year:
							</label>
							<input
								type="text"
								id="search-year"
								name="search-year"
								value={
									tempSearchOptions.searchYear
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
							<label htmlFor="search-type">
								Type:{"  "}
							</label>
							<select
								id="search-type"
								name="search-type"
								value={
									tempSearchOptions.searchType
								}
								onChange={(e) =>
									setTempSearchOptions({
										...tempSearchOptions,
										searchType: e.target.value,
									})
								}
							>
								<option value="">All</option>
								<option value="movie">
									Movie
								</option>
								<option value="series">
									Series
								</option>
								<option value="episode">
									Episode
								</option>
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

			<button
				className="searchbar-btn"
				onClick={() =>
					setSearchOptions({
						...tempSearchOptions,
					})
				}
			>
				Search
			</button>
		</div>
	);
}

export default SearchBar;
