import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
	return(
		<div>
			{
				movies.map((movie, i) => {
					return(
						<Movie
						    key={i}
							title={movies[i].title}
							overview={movies[i].overview}
							poster={movies[i].backdrop_path}
							rating={movies[i].vote_average}
							releaseDate={movies[i].release_date}
						/>
					);
				})
			}
		</div>
	);
}

export default MovieList;