"use client";
import { use, useEffect, useState } from "react";
import { ReceitaItem, PaginatedReceitas } from "../../types/receitas";
import { PlaceholderRecipeCard } from "./components/PlaceholderRecipeCard";
import { RecipeCard } from "./components/RecipeCard";
import { RecipesHeader } from "./components/RecipesHeader";
import { RecipesGrid } from "./components/RecipesGrid";
import { Pagination } from "./components/Pagination";
import { EmptyState } from "./components/EmptyState";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ query: string }>;
}) {
  const { query } = use(params);

  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState<PaginatedReceitas>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api-receitas-pi.vercel.app/receitas/descricao?descricao=${query}&page=${page}&limit=10`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data) return;
        setRecipes(data);
        setLoading(false);
      });
  }, [page, query]);

  return (
    <div className="h-dvh flex flex-col items-center justify-center">
      {loading ? (
        <>
          <RecipesHeader query={query} />
          <RecipesGrid>
            {Array.from({ length: 10 }).map((_, i) => (
              <PlaceholderRecipeCard key={i} />
            ))}
          </RecipesGrid>
        </>
      ) : recipes?.items && recipes.items.length > 0 ? (
        <>
          <RecipesHeader query={query} />
          <RecipesGrid>
            {recipes.items.map((r: ReceitaItem) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </RecipesGrid>
          <Pagination
            page={page}
            totalPages={recipes.meta.totalPages}
            onChange={setPage}
          />
        </>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
