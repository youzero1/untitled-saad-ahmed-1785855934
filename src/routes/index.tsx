import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="text-slate-400">My Tasks — loading…</div>
    </div>
  );
}
