// pages/index.tsx
import React from "react";
import Movie from "@/components/movie";

export default async function getMovieList({ movies }: { movies: any }) {
  const popular = await fetch(`
  https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const response = await popular.json();



  return (
    <main className="p-24">
        <h1 className="font-bold text-2xl pb-9">Popular Movies</h1>

      <div className=" grid grid-cols-4 gap-6">
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
