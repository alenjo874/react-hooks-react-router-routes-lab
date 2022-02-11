import React from "react";
import { directors } from "../data";

function Directors() {
  const displatDirectors = directors.map((director) => {
    return (
      <div key={director.name}>
        {director.name}

        {director.movies.map((movie) => {
          return (
            <ul key={movie}>
              <li>{movie}</li>
            </ul>
          );
        })}
      </div>
    );
  });
  return (
    <div>
      <h1>Directors Page</h1>
      {displatDirectors}
    </div>
  );
}

export default Directors;
