import { useState } from "react";
import { FiFilter } from "react-icons/fi";

function SearchBar({
	searchOptions,
	setSearchOptions,
}) {
	const [showFilterMenu, setShowFilterMenu] =
		useState(false);

	return (
		<div className="searchbar">
			<input
				type="text"
				className="searchbar-input"
				placeholder="Search for a movie..."
				onChange={(e) =>
					setSearchOptions({
						...searchOptions,
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
								value={searchOptions.searchYear}
								onChange={(e) =>
									setSearchOptions({
										...searchOptions,
										searchYear: e.target.value,
									})
								}
							/>
						</div>

						<div className="filter-menu-item">
							<label htmlFor="search-type">
								Type:
							</label>
							<select
								id="search-type"
								name="search-type"
								value={searchOptions.searchType}
								onChange={(e) =>
									setSearchOptions({
										...searchOptions,
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
		</div>
	);
}

export default SearchBar;
