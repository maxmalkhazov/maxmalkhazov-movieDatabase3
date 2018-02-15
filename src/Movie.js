import React from "react";

const Movie = ({title, releaseDate, overview, poster, rating}) => {
	return(
		<div className="main">
			<img className="poster" src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="Poster"/>
			<div className="card">
				<h2 className="title">{`${title} (${releaseDate.slice(releaseDate.length-10, releaseDate.length-6)})`}</h2>
				<p className="overview">{overview}</p>
				<p className="rating">{rating}/10</p>
			</div>
		</div>
	);
}

export default Movie;