"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <Button
      variant="outline"
      onClick={() => setLikes((prev) => prev + 1)}
      className="w-fit"
    >
      ❤ {likes}
    </Button>
  );
}
