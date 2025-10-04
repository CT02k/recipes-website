import SearchInput from "@/app/components/SearchInput";
import { ReactNode } from "react";

export function RecipesGrid({ children }: { children: ReactNode }) {
  return (
    <>
      <SearchInput />
      <div className="flex flex-wrap justify-center w-3/4 gap-4 h-fit overflow-y-scroll my-10">
        {children}
      </div>
    </>
  );
}
