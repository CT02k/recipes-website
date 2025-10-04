"use client";
import { Button } from "@/app/components/Button";

type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
};

export function Pagination({ page, totalPages, onChange }: PaginationProps) {
  return (
    <div className="pagination flex gap-3 mb-10">
      <Button onClick={() => onChange(page - 1)} circle disabled={page <= 1}>
        {"<"}
      </Button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <Button
          key={p}
          className={page !== p ? "opacity-70" : ""}
          onClick={() => onChange(p)}
          circle
        >
          {p}
        </Button>
      ))}
      <Button
        onClick={() => onChange(page + 1)}
        circle
        disabled={page >= totalPages}
      >
        {">"}
      </Button>
    </div>
  );
}
