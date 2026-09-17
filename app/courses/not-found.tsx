import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Course not found</h1>
      <p className="text-gray-600">
        We couldn&apos;t find the course you were looking for.
      </p>
      <Link href="/courses" className="text-blue-600 hover:underline w-fit">
        Back to courses
      </Link>
    </div>
  );
}
