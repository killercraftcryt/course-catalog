"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <button
      onClick={() => setLikes((prev) => prev + 1)}
      className="w-fit rounded border border-gray-300 px-4 py-2 hover:bg-gray-50 transition-colors"
    >
      ❤ {likes}
    </button>
  );
}
