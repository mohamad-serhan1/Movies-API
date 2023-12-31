"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Movie {
  title?: string;
  id: number;
  poster_path: string;
  release_date: string;
  vote_average?: number;
  aspectRatio?: "portrait" | "square";
  genres?: { id: number; name: string }[];
  className?: string;
}

export default function Movie({
  title,
  id,
  poster_path,
  release_date,
  vote_average=0,
  aspectRatio = "portrait",
  genres,
  className,
  ...props
}: Movie) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  const roundedVoteAverage = vote_average.toFixed(1);

  return (
    <div className={cn("space-y-3", className)} {...props}>
      <Link href={`/${id}`} className="select-none">
        <div className="relative">
          <Image
            className={cn(
              "h-auto w-auto object-cover transition-all  hover:scale-105  relative rounded-md ",
              aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
            )}
            src={imagePath + poster_path}
            width={500}
            height={400}
            draggable="false"
            alt={title as string}
          />
          <div className="w-full h-full  bottom-0  hover:cursor-pointer bg-[#0000009a] rounded-md flex justify-center items-center gap-1 px-4 py-1 text-white transition-all duration-300 hover:opacity-100 absolute opacity-0">
            <Image
              src={"/Star.png"}
              alt={"rate:"}
              width={16}
              height={16}
              className="bottom-0"
            />
            {roundedVoteAverage}/10
          </div>
        </div>
      </Link>
      <div>
        <p className=" font-bold flex justify-center">{title}</p>
      </div>
    </div>
  );
}
