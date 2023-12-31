"use client"
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Tv {
  title?: string;
  id?: number;
  poster_path?: string;
  release_date?: string;
  aspectRatio?: "portrait" | "square";
  className?: string;
  refProp?: React.RefObject<HTMLDivElement>;
}
export default function Tv({
  title,
  id,
  poster_path,
  release_date,
  aspectRatio = "portrait",
  className,
  refProp,
  ...props
}: Tv) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div className={cn("space-y-3", className)} {...props}>
        <div ref={refProp}>
          <Link href={`/${id}`}>
            <Image
              className={cn(
                "h-auto w-auto object-cover transition-all py-2 hover:scale-105 relative rounded-md ",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
              src={imagePath + poster_path}
              width={500}
              height={400}
              alt={title as string}
            />
          </Link>
          {title}
        </div>
      
    </div>
  );
}
