import { useNavigate } from "react-router-dom";
import Page from "./Page";

function Paging({ page, setPage }) {
	const pageNum = 30;

	const navigate = useNavigate();

	const queryParams = new URLSearchParams(window.location.search);
	const pageParam = queryParams.get("page");
	const sterm = queryParams.get("sterm");
	const syear = queryParams.get("syear");
	const stype = queryParams.get("stype");

	if (pageParam && parseInt(pageParam) !== page) {
		setPage(parseInt(parseInt(pageParam)));
	}

	function handlePageClick(step) {
		setPage(page + step);

		navigate(
			`?sterm=${sterm}&syear=${syear}&stype=${stype}&page=${page + step}`
		);
	}

	return (
		<div className="paging">
			<button
				className="paging-button"
				disabled={page === 1}
				onClick={() => handlePageClick(-1)}
			>
				Previous
			</button>

			{Array(pageNum)
				.fill(30)
				.map((_, index) =>
					index < 3 || (index > page - 5 && index < page + 5) || index > 26 ? (
						index + 1 === page ? (
							<Page
								key={index}
								page={index + 1}
								setPage={setPage}
								active={true}
							/>
						) : (
							<Page
								key={index}
								page={index + 1}
								setPage={setPage}
								active={false}
							/>
						)
					) : null
				)}

			<button
				className="paging-button"
				disabled={page === pageNum}
				onClick={() => handlePageClick(1)}
			>
				Next
			</button>
		</div>
	);
}

export default Paging;
