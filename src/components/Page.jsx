import { useLocation, useNavigate } from "react-router-dom";

function Page({ page, setPage, active }) {
	const navigate = useNavigate();
	const location = useLocation();

	const queryParams = new URLSearchParams(location.search);
	const sterm = queryParams.get("sterm");
	const syear = queryParams.get("syear");
	const stype = queryParams.get("stype");

	function handlePageClick() {
		setPage(page);

		navigate(`?sterm=${sterm}&syear=${syear}&stype=${stype}&page=${page}`);
	}

	return (
		<div
			className="page"
			style={active ? { backgroundColor: "#f5f5f5" } : null}
			onClick={handlePageClick}
		>
			<button className="page-button">{page}</button>
		</div>
	);
}

export default Page;
