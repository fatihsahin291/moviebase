function InternetRatings({ ratings }) {
	return (
		<div className="internet-ratings">
			<h3>Internet Ratings</h3>
			<div className="internet-ratings-container">
				<div className="internet-ratings-container-item">
					<h4>IMDB</h4>
					<p>7.5/10</p>
				</div>
				<div className="internet-ratings-container-item">
					<h4>Rotten Tomatoes</h4>
					<p>61%</p>
				</div>
				<div className="internet-ratings-container-item">
					<h4>Metacritic</h4>
					<p>57/100</p>
				</div>
			</div>
		</div>
	);
}

export default InternetRatings;
