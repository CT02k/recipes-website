import React from "react";

export function Button({
  children,
  circle,
  ...props
}: React.ComponentProps<"button"> & {
  children: React.ReactNode;
  circle?: boolean;
}) {
  return (
    <button
      {...props}
      className={`${!circle ? "px-8 py-2.5 rounded-full" : "h-12 w-12 rounded-full flex items-center justify-center"} disabled:cursor-default disabled:opacity-50 disabled:hover:bg-orange-500 bg-orange-500 text-white font-semibold text-lg hover:bg-orange-500/90 transition cursor-pointer ${props.className ?? ""}`}
    >
      {children}
    </button>
  );
}
