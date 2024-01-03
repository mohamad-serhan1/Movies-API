import { Skeleton } from "@/components/ui/skeleton";

export default function MovieLoading() {
  return (
    <div className="p-12 ">
      <div className="flex items-center space-x-4 pt-10">
        <div>
          <Skeleton className="md:h-[350px] md:w-[300px] rounded-md" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-[350px]" />
          <Skeleton className="h-4 w-[500px]" />

          <div className=" flex flex-row gap-4 ">
            <Skeleton className="h-4 w-[50px]" />

            <Skeleton className="h-4 w-[50px]" />
            <Skeleton className="h-4 w-[50px]" />
          </div>
          <Skeleton className="h-4 w-[50px]" />
          <Skeleton className="h-[150px] w-[600px]" />
        </div>
      </div>
    </div>
  );
}