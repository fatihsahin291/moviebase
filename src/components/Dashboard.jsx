import MoviePreview from "./MoviePreview";
import LoadingIndicator from "./LoadingIndicator";
import Paging from "./Paging";
import { memo } from "react";

function Dashboard({
	movies,
	loading,
	error,
	page,
	setPage,
}) {
	if (loading) {
		return <LoadingIndicator />;
	}

	if (error) return <div>Error: {error}</div>;

	console.log(movies);

	return (
		<div className="dashboard">
			{movies &&
				movies.map((movie) => (
					<MoviePreview
						key={movie.imdbID}
						movie={movie}
					/>
				))}

			{movies.length ? (
				<Paging page={page} setPage={setPage} />
			) : null}
		</div>
	);
}

memo(Dashboard);

export default Dashboard;
