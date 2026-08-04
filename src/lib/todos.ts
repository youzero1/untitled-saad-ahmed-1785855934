import type { Todo } from '@/types/todo';

const STORAGE_KEY = 'my-tasks:todos';

export function loadTodos(): Todo[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as Todo[];
  } catch {
    return [];
  }
}

export function saveTodos(todos: Todo[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch {
    // ignore write errors (e.g. storage full or unavailable)
  }
}

export function sortTodos(todos: Todo[]): Todo[] {
  return [...todos].sort((a, b) => {
    if (a.completed !== b.completed) return a.completed ? 1 : -1;
    if (a.dueDate && b.dueDate) {
      if (a.dueDate !== b.dueDate) return a.dueDate < b.dueDate ? -1 : 1;
    } else if (a.dueDate) {
      return -1;
    } else if (b.dueDate) {
      return 1;
    }
    return a.createdAt - b.createdAt;
  });
}

export function isOverdue(todo: Todo): boolean {
  if (!todo.dueDate || todo.completed) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(todo.dueDate + 'T00:00:00');
  return due.getTime() < today.getTime();
}
