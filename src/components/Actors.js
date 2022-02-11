import React from "react";
import { actors } from "../data";

function Actors() {

  const displayActors = actors.map((actor) => {
    return (
      <div key={actor.name}>
        {actor.name}

        {actor.movies.map((movie) => {
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
      <h1>Actors Page</h1>
      {displayActors}
    </div>
  );
}

export default Actors;
