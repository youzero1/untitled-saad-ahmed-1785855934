import { useState } from 'react';
import type { FormEvent } from 'react';

interface TodoInputProps {
  onAdd: (title: string, dueDate: string | null) => void;
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title, dueDate || null);
    setTitle('');
    setDueDate('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task…"
        className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
      />
      <button
        type="submit"
        className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
      >
        Add
      </button>
    </form>
  );
}
