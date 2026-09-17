import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Course Catalog</h1>
      <p className="text-gray-600">
        Welcome! Browse the courses offered as part of the Advanced Web
        Technologies program.
      </p>
      <Link
        href="/courses"
        className="w-fit rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
      >
        View courses
      </Link>
    </div>
  );
}
