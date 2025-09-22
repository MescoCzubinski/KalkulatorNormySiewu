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
      <h1 className="flex-1">{title}</h1>
      <h1 className="text-[var(--secondary-color)] font-bold flex-1 text-center text-wrap">
        {result}
      </h1>
    </div>
  );
}
