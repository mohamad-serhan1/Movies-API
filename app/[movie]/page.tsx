import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
interface MovieDetailProps {
  params: {
    movie: string;
  };
  aspectRatio?: "portrait" | "square";
  totalMinutes?: number;
  genre?: string;
}

export async function generateStaticParams(
  aspectRatio: "portrait" | "square"
): Promise<MovieDetailProps> {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
    const res = response.data;

    // Assuming you want to return the first movie from the popular list
    const firstMovie = res.results[0];

    return {
      params: {
        movie: firstMovie.id.toString(),
      },
      aspectRatio: aspectRatio, // You can assign aspectRatio here if needed
      // Add other properties you need here
    };
  } catch (error) {
    // Handle errors here, e.g., log the error or throw it further
    console.error("Error fetching data:", error);
    throw error;
  }
}

 async function MovieDetail({ params }: { params: any }) {
  const movieData = await generateStaticParams("portrait");

  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  const img = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}/images?api_key=${process.env.API_KEY}`
  );
  const resI = await img.json();

  function toHoursAndMinutes(totalMinutes: any) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${padTo2Digits(hours) + "h"}:${padTo2Digits(minutes) + "m"}`;
  }
  function formatReleaseDate(releaseDate: any) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(releaseDate).toLocaleDateString("en-US", options as any);
  }

  function padTo2Digits(num: number) {
    return num.toString().padStart(2);
  }
  const time = res.runtime;
  const roundedVote = res.vote_average;
  const roundedVoteAverage = roundedVote.toFixed(1);

  return (
    <main className="pt-5 sm:pt-10 text-xs h-full sm:text-base sm:h-screen relative">
      <div
        className="  object-center h-screen sm:h-screen"
        style={{
          backgroundImage: `url(${imagePath + res.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-10 bg-opacity-90 bg-black text-white flex flex-col justify-center items-center md:flex-row gap-10 h-full">
          <div className=" flex md:basis-1/4  md:h-3/4">
            <Image
              className={cn(
                " hidden md:inline-block md:h-auto md:w-auto rounded-md",
                movieData.aspectRatio === "portrait"
                  ? "aspect-[3/4]"
                  : "aspect-square"
              )}
              src={imagePath + res.poster_path}
              width={400}
              height={550}
              alt={res.title as string}
            />
          </div>
          <div className=" md:flex-col basis-3/4">
            <div className="flex flex-row gap-4 pt-7">
              <h2 className="text-3xl font-semibold font-sans justify-center">
                {res.title}
              </h2>
            </div>
            <div className="flex flex-row gap-1 pt-4 align-middle ">
              <h2 className="flex flex-row gap-1">
                {res.genres.map((genre: any, id: any) => (
                  <Badge variant="outline" className="text-white" key={id}>
                    {genre.name}
                  </Badge>
                ))}
              </h2>
              <h2 className="text-xs sm:text-sm font-thin">
                {formatReleaseDate(res.release_date)}
              </h2>
            </div>
            <h2 className="pt-3"> {toHoursAndMinutes(time)} </h2>

            <div className="pt-4 flex flex-row gap-1">
              Rated : {roundedVoteAverage + "/10 \n"}
              <Image
                src={"/Star.png"}
                alt={"rate:"}
                width={16}
                height={16}
                className="bottom-0 object-contain"
              />
            </div>

            <div className="pt-4 text-start">
              <p>Overview:</p>
              <p className="pt-2 ">{res.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default MovieDetail;