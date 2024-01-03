// pages/index.tsx
import React from "react";
import Movie from "@/components/movie";

async function getMovieList() {
  const popular = await fetch(`
  https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}`);
  const response = await popular.json();

  return (
    <main className="p-24 space-y-9">
      <h1 className="font-bold text-2xl pb-9">Now Playing</h1>
      <div className="grid grid-cols-1 gap-4  sm:grid-cols-2 md:grid-cols-4 ">
        {response.results.map((movie: any) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            className="w-[150px] sm:w-[250px]"
            vote_average={movie.vote_average}
            aspectRatio="portrait"
            genres={movie.genres}
          />
        ))}
      </div>
    </main>
  );
}
export default getMovieList;
