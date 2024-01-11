import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import InternetRatings from "./InternetRatings";
import LoadingIndicator from "./LoadingIndicator";
import Error from "./Error";

function MovieDetails() {
	const movieID = useParams().movieID;

	const { movie, loading, error } =
		useMovieDetails(movieID);

	const {
		Poster,
		Title,
		Year,
		Rated,
		Released,
		Runtime,
		Genre,
		Director,
		Writer,
		Actors,
		Plot,
		Language,
		Country,
		Awards,
		Ratings,
		imdbVotes,
		Type,
		DVD,
		BoxOffice,
		Production,
		Website,
	} = movie;

	console.log(movie);

	if (loading) {
		return (
			<div className="movie-details">
				<LoadingIndicator />
			</div>
		);
	}

	if (error) {
		return (
			<div className="movie-details">
				<Error error={error} />
			</div>
		);
	}

	console.log(error);

	return (
		<div className="movie-details">
			<div className="movie-details-heading">
				<div className="movie-details-poster">
					<img src={Poster} alt={Title} />
				</div>
				<div className="movie-details-title">
					<h2>{Title}</h2>
					<h3>Year: {Year}</h3>
					<h3>Runtime: {Runtime}</h3>
					<h3>Genre: {Genre}</h3>
					<h3>Rated: {Rated}</h3>
					<h3>Released: {Released}</h3>
				</div>
				<InternetRatings
					Ratings={Ratings}
					imdbVotes={imdbVotes}
				/>
			</div>
			<div className="divider"></div>

			<div className="movie-details-body">
				<div className="movie-details-body-item movie-details-body-left">
					<h3>Plot</h3>
					<p>{Plot ? Plot : "N/A"}</p>
					<h3>Actors</h3>
					<p>{Actors ? Actors : "N/A"}</p>
					<h3>Director</h3>
					<p>{Director ? Director : "N/A"}</p>
					<h3>Writer</h3>
					<p>{Writer ? Writer : "N/A"}</p>
					<h3>Language</h3>
					<p>{Language ? Language : "N/A"}</p>
					<h3>Country</h3>
					<p>{Country ? Country : "N/A"}</p>
				</div>
				<div className="movie-details-body-item movie-details-body-right">
					<h3>Awards</h3>
					<p>{Awards ? Awards : "N/A"}</p>
					<h3>imdbVotes</h3>
					<p>{imdbVotes ? imdbVotes : "N/A"}</p>
					<h3>Type</h3>
					<p>{Type ? Type : "N/A"}</p>
					<h3>DVD</h3>
					<p>{DVD ? DVD : "N/A"}</p>
					<h3>BoxOffice</h3>
					<p>{BoxOffice ? BoxOffice : "N/A"}</p>
					<h3>Production</h3>
					<p>{Production ? Production : "N/A"}</p>
					<h3>Website</h3>
					<p>{Website ? Website : "N/A"}</p>
				</div>
			</div>
		</div>
	);
}

export default MovieDetails;
