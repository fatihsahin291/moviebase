import MoviePreview from "./MoviePreview";
import LoadingIndicator from "./LoadingIndicator";
import { memo } from "react";

function Dashboard({ movies, loading, error }) {
	if (loading) {
		return <LoadingIndicator />;
	}

	if (error) return <div>Error: {error}</div>;

	return (
		<div className="dashboard">
			{movies &&
				movies.map((movie) => (
					<MoviePreview
						key={movie.imdbID}
						movie={movie}
					/>
				))}
		</div>
	);
}

memo(Dashboard);

export default Dashboard;
