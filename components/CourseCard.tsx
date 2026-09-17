import Link from "next/link";

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
    <Link
      href={`/courses/${id}`}
      className="block rounded-lg border border-gray-200 p-4 hover:shadow-md hover:border-blue-300 transition-all"
    >
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 mt-1">{description}</p>
      <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
        <span>{credits} credits</span>
        <span>❤ {likes}</span>
      </div>
    </Link>
  );
}
