import CourseCard from "@/components/CourseCard";
import { getCourses } from "@/lib/courses";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Courses</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            credits={course.credits}
            likes={course.likes}
          />
        ))}
      </div>
    </div>
  );
}
