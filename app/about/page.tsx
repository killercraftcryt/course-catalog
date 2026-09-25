export default function AboutPage() {
  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <h1 className="text-3xl font-bold font-heading">About</h1>
      <p className="text-gray-600">
        This course catalog was built as the semester project for the
        &quot;Advanced Web Technologies&quot; course. It showcases the App
        Router, Server and Client Components, dynamic routing, and basic
        TypeScript typing in Next.js.
      </p>
      <p className="text-gray-600">
        The project starts as a simple scaffold in Lab 1 and grows with each
        following lab throughout the semester.
      </p>
    </div>
  );
}
