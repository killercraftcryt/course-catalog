# Course Catalog

Lab 1 scaffold for the "Advanced Web Technologies" course semester project.

## What's implemented

**Lab 1**
- `/` — home page with a welcome message and a link to `/courses`.
- `/about` — static page describing the project.
- `/courses` — course list rendered from mock data (`lib/courses.ts`), via the `CourseCard` Server Component.
- `/courses/[id]` — course detail page with `params` typed as a `Promise`, `generateStaticParams`, a `loading.tsx` state, and a `not-found.tsx` fallback.
- `LikeButton` — the only Client Component in the project, using `useState` for local like counts.
- Shared navigation (Home / Courses / About) in `app/layout.tsx`.

**Lab 3**
- shadcn/ui set up (`components.json`, `lib/utils.ts`) with `Button` and `Card` components added under `components/ui/`.
- `CourseCard` rewritten to use `Card`/`CardHeader`/`CardTitle`/`CardContent` and `Button` instead of plain divs.
- `LikeButton` restyled with the shadcn `Button` (outline variant) — still the only Client Component.
- `/courses` grid is responsive: 1 column on mobile, 2 columns from `sm:`, 3 columns from `lg:`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deployment

_Add a link here once deployed to Vercel._
