"use client";
import Image from "next/image";

import { Search } from "lucide-react";
import { Button } from "./Button";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search")?.toString().trim();

    if (!query) return;
    router.push(`/receitas/${encodeURIComponent(query)}`);
  };

  return (
    <main className="flex flex-col h-dvh items-center justify-center text-center px-4 relative">
      <h1 className="text-6xl md:text-7xl font-bold text-orange-500 mb-6">
        Recipes Website
      </h1>
      <p className="text-lg md:text-xl text-orange-950 max-w-3xl mb-8">
        Descubra um universo de sabores e aprenda a preparar pratos incríveis,
        desde receitas simples do dia a dia até criações mais elaboradas para impressionar.
      </p>
      <form className="search flex gap-2 w-fit mb-8" onSubmit={handleSubmit}>
        <input type="text" 
          name="search" className="rounded-full w-96 h-12 px-5 bg-orange-100 border placeholder:text-orange-950/50 border-orange-300 outline-0" placeholder="Procurar" />
        
      <Button type="submit" circle>
        <Search/>
      </Button>
      </form>
      <Button>Ver todas as receitas</Button>
    </main>
  );
}
