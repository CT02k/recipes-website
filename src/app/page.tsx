"use client";
import { useRouter } from "next/navigation";
import { Button } from "./components/Button";
import SearchInput from "./components/SearchInput";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col py-48 items-center justify-center text-center px-4 relative">
      <h1 className="text-6xl md:text-7xl font-bold text-orange-500 mb-6">
        Recipes
      </h1>
      <p className="text-lg md:text-xl text-orange-950 max-w-3xl mb-8">
        Descubra um universo de sabores e aprenda a preparar pratos incríveis,
        desde receitas simples do dia a dia até criações mais elaboradas para
        impressionar.
      </p>

      <SearchInput />

      <Button onClick={() => router.push("/receitas")}>
        Ver todas as receitas
      </Button>
    </main>
  );
}
