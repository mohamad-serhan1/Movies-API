"use client";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Movie from "@/components/movie";

const DraggableScroll = ({ responseTv }: { responseTv: any }) => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  
  return (
    <div
      className="flex h-[310px] font-sans text-sm sm:text-md sm:h-[420px] rounded p-4 border gap-4 overflow-x-scroll example"
      {...events}
      ref={ref}
    >
      <div className=" relative flex  space-x-4 pb-4 ">

        {responseTv.results.map((movie: any) => ( 
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            className="w-[150px] sm:w-[250px]"
            vote_average={movie.vote_average}
            aspectRatio= "portrait"
            genres={movie.genres}
          />
         
          ))}
          </div>
    </div>
  );
};

export default DraggableScroll;
