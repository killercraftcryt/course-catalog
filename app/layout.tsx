import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "Advanced Web Technologies — course catalog project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <nav className="flex gap-6 px-6 py-4 border-b border-gray-200">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link
            href="/courses"
            className="hover:text-blue-600 transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-600 transition-colors"
          >
            About
          </Link>
        </nav>
        <main className="px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
