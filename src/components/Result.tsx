// import { useEffect, useState } from "react";
export default function Result({
  title,
  result,
}: {
  title?: string;
  result: string;
}) {
  return (
    <div className="flex items-center gap-2 text-xl font-semibold cursor-default mb-4">
      <h1>{title}</h1>
      <h1 className="text-[var(--secondary-color)] font-bold w-full text-center">
        {result}
      </h1>
    </div>
  );
}
