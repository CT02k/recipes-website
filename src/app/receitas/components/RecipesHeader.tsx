export function RecipesHeader({ query }: { query: string }) {
  return (
    <div className="my-10">
      <h1 className="text-orange-500 text-6xl font-semibold">
        Receitas de: {decodeURI(query)}
      </h1>
    </div>
  );
}
