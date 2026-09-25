import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold font-heading">Course Catalog</h1>
      <p className="text-slate-600">
        Welcome! Browse the courses offered as part of the Advanced Web
        Technologies program.
      </p>
      <Link
        href="/courses"
        className="w-fit rounded bg-brand px-4 py-2 text-white hover:bg-brand/90 transition-colors"
      >
        View courses
      </Link>
    </div>
  );
}
