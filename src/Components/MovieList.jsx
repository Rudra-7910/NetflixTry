//analyzed

import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <section className="px-4 md:px-12 py-3 md:py-6">
      <h2 className="text-lg md:text-3xl font-semibold text-white mb-3 md:mb-5 drop-shadow-md">
        {title}
      </h2>

      <div className="flex overflow-x-auto gap-3 md:gap-5 no-scrollbar pb-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-shrink-0 hover:scale-105 md:hover:scale-110 transition-transform duration-300 cursor-pointer hover:z-10"
          >
            <MovieCard posterPath={movie.poster_path} movieId={movie.id} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieList;