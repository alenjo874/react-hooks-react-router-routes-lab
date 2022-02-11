import React from "react";
import { movies } from "../data";

function Movies() {
  const displayMoves = movies.map((movie) => {
    return (
      <div key={movie.time}>
        {movie.title}
        {movie.time}
        {movie.genres.map((genre) => {
          return (
            <ul key={genre}>
              <li>{genre}</li>
            </ul>
          );
        })}
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {displayMoves}
    </div>
  );
}

export default Movies;
