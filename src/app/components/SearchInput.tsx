import { Button } from "@/app/components/Button";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search")?.toString().trim();

    if (!query) return;
    router.push(`/receitas/${encodeURIComponent(query)}`);
  };
  return (
    <form className="search flex gap-2 w-fit mb-8" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        className="rounded-full w-96 h-12 px-5 bg-orange-100 border placeholder:text-orange-950/50 border-orange-300 outline-0"
        placeholder="Procurar"
      />

      <Button type="submit" circle>
        <Search />
      </Button>
    </form>
  );
}
