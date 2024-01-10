import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import InternetRatings from "./InternetRatings";

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
		Metascore,
		imdbRating,
		imdbVotes,
		imdbID,
		Type,
		DVD,
		BoxOffice,
		Production,
		Website,
	} = movie;

	console.log(movie);

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
				<InternetRatings Ratings={Ratings} />
			</div>
			<div className="divider"></div>

			<div className="movie-details-plot">
				<h3>Plot</h3>
				<p>{Plot}</p>
			</div>

			<div className="movie-details-cast">
				<h3>Cast</h3>
				<p>{Actors}</p>
			</div>

			<div className="movie-details-crew">
				<h3>Crew</h3>
				<p>Director: {Director}</p>
				<p>Writer(s): {Writer}</p>
			</div>

			<div className="movie-details-awards">
				<h3>Awards</h3>
				<p>{Awards}</p>
			</div>
		</div>
	);
}

export default MovieDetails;

// Actors
// :
// "Jane Levy, Shiloh Fernandez, Jessica Lucas"
// Awards
// :
// "6 wins & 19 nominations"
// BoxOffice
// :
// "$54,239,856"
// Country
// :
// "United States, New Zealand, Australia"
// DVD
// :
// "16 Jul 2013"
// Director
// :
// "Fede Alvarez"
// Genre
// :
// "Horror"
// Language
// :
// "English, Welsh"
// Metascore
// :
// "57"
// Plot
// :
// "Five friends head to a remote cabin, where the discovery of a Book of the Dead leads them to unwittingly summon up demons living in the nearby woods."
// Poster
// :
// "https://m.media-amazon.com/images/M/MV5BYzk2ZTVhOWMtMWQxYS00OWQzLWFmY2QtODQ4NGFmNGQxZWVmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
// Production
// :
// "N/A"
// Rated
// :
// "R"
// Ratings
// :
// (3) [{…}, {…}, {…}]
// Released
// :
// "05 Apr 2013"
// Response
// :
// "True"
// Runtime
// :
// "91 min"
// Title
// :
// "Evil Dead"
// Type
// :
// "movie"
// Website
// :
// "N/A"
// Writer
// :
// "Fede Alvarez, Rodo Sayagues, Sam Raimi"
// Year
// :
// "2013"
// imdbID: "tt1288558"
// imdbRating: "6.5"
// imdbVotes: "194,872"
