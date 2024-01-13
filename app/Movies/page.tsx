// pages/index.tsx
import React from "react";
import Movie from "@/components/movie";

 async function MoviesPage () {
  const popular = await fetch(`
  https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const response = await popular.json();



  return (
    <main className="p-12 sm:p-24">
        <h1 className="font-bold text-2xl pb-9">Popular Movies</h1>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
        {response.results.map((movie: any) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            className="w-[230px] sm:w-[250px]"
            vote_average={movie.vote_average}
            aspectRatio="portrait"
            genres={movie.genres}
          />
        ))}
      </div>
    </main>
  );
}

export default MoviesPage;