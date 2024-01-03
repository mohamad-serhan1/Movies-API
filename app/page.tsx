import DraggableScroll from "@/components/draggable-scroll";

interface movies {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: string;
}

async function Home() {
  const time_window = "day";

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  const trend = await fetch(`
  https://api.themoviedb.org/3/trending/movie/${time_window}?api_key=${process.env.API_KEY}`);
  const response = await trend.json();

  return (
    <main className="flex flex-col p-10 relative">
      <section>
        <div className=" overflow-hidden rounded-md pt-5">
          <h1 className="font-semibold text-2xl px-4 pb-3">Trending Movies</h1>

          <DraggableScroll responseTv={response} />
        </div>
      </section>

      <section>
        <div className=" relative overflow-hidden rounded-md pt-5">
          <h1 className="font-semibold text-2xl px-4 pb-3">Top Rated</h1>

          <DraggableScroll responseTv={res} />
        </div>
      </section>
    </main>
  );
}
export default Home;
