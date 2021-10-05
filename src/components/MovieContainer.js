import { useState, useEffect } from "react";
import MovieItem from "./MovieItems";

const MovieContainer = ({ movies, rating, input }) => {
  const [filtredMovies, setFiltredMovies] = useState(movies);

  useEffect(() => {
    setFiltredMovies(
      movies.filter((movie) => {
        return (
          movie.name
            .trim()
            .toLowerCase()
            .includes(input.trim().toLowerCase()) && movie.rating >= rating
        );
      })
    );
  }, [rating, input, movies]);

  return (
    <div>
      <MovieItem filtredMovies={filtredMovies} />
    </div>
  );
};

export default MovieContainer;