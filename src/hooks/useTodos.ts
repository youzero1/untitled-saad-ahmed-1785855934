import { useEffect, useState } from 'react';
import type { Todo } from '@/types/todo';
import { loadTodos, saveTodos, sortTodos } from '@/lib/todos';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => loadTodos());

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  function addTodo(title: string, dueDate: string | null) {
    const trimmed = title.trim();
    if (!trimmed) return;
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: trimmed,
      completed: false,
      dueDate: dueDate || null,
      createdAt: Date.now(),
    };
    setTodos((prev) => [...prev, newTodo]);
  }

  function toggleTodo(id: string) {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  function editTodo(id: string, title: string) {
    const trimmed = title.trim();
    if (!trimmed) return;
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, title: trimmed } : t)));
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function clearCompleted() {
    setTodos((prev) => prev.filter((t) => !t.completed));
  }

  return {
    todos: sortTodos(todos),
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
    clearCompleted,
  };
}
