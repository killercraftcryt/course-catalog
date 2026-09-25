import Link from "next/link";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <Card className="h-full transition-shadow hover:shadow-md">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-slate-600">{description}</p>
          <div className="flex items-center justify-between text-sm text-slate-500">
            <span>{credits} credits</span>
            <Button variant="ghost" size="sm" className="pointer-events-none">
              ❤ {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
