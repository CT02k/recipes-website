import { Button } from "@/app/components/Button";

export function PlaceholderRecipeCard() {
  return (
    <div className="w-64 h-96 bg-orange-100 border border-orange-200 rounded-xl flex flex-col items-center justify-between contain-content animate-pulse">
      <div className="w-full relative bg-orange-200 h-72">
        <span className="rounded-full bg-orange-500/80 border border-orange-500 text-white text-xs px-3 py-1 absolute bottom-2 right-2 w-20 h-6"></span>
      </div>
      <div className="h-full w-full p-4">
        <div className="text-xl font-semibold">
          <div className="w-48 h-5 bg-orange-300"></div>
        </div>
        <div>
          <div className="w-48 h-3 bg-orange-300 mt-4"></div>
          <div className="w-32 h-3 bg-orange-300 mt-4"></div>
          <div className="w-48 h-3 bg-orange-300 mt-4"></div>
        </div>
      </div>
      <div className="w-full p-4">
        <Button className="w-full">
          <div className="my-7"></div>
        </Button>
      </div>
    </div>
  );
}
