import {
	BsStar,
	BsStarFill,
	BsStarHalf,
} from "react-icons/bs";
import {
	SiImdb,
	SiRottentomatoes,
} from "react-icons/si";

function InternetRatings({ Ratings, imdbVotes }) {
	return (
		<div className="internet-ratings">
			<h3>Internet Ratings</h3>
			<div className="internet-ratings-container">
				{Ratings &&
					Ratings.map((rating) => {
						if (
							rating.Source ===
							"Internet Movie Database"
						) {
							return (
								<div
									className="internet-ratings-container-item"
									key={rating.Source}
								>
									<SiImdb className="rating-source-icon" />
									<p>{rating.Value}</p>
									{imdbVotes && (
										<p>({imdbVotes})</p>
									)}
								</div>
							);
						} else if (
							rating.Source === "Rotten Tomatoes"
						) {
							return (
								<div
									className="internet-ratings-container-item"
									key={rating.Source}
								>
									<SiRottentomatoes className="rating-source-icon" />
									<p>{rating.Value}</p>
								</div>
							);
						} else {
							return (
								<div
									className="internet-ratings-container-item"
									key={rating.Source}
								>
									<h4>{rating.Source}</h4>
									<p>{rating.Value}</p>
								</div>
							);
						}
					})}
			</div>
		</div>
	);
}

export default InternetRatings;
