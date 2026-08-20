import { createFileRoute } from '@tanstack/react-router';
import { useTodos } from '@/hooks/useTodos';
import { TodoSummary } from '@/components/TodoSummary';
import { TodoInput } from '@/components/TodoInput';
import { TodoList } from '@/components/TodoList';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const { todos, addTodo, toggleTodo, editTodo, deleteTodo, clearCompleted } = useTodos();
  const remaining = todos.filter((t) => !t.completed).length;
  const hasCompleted = todos.some((t) => t.completed);

  return (
    <div className="flex min-h-screen items-center justify-center bg-red-50 p-4">
      <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-xl shadow-red-100">
        <div className="px-6 pt-6">
          <h1 className="text-2xl font-bold text-red-700">Saad tasks</h1>
        </div>
        <TodoInput onAdd={addTodo} />
        <TodoSummary
          remaining={remaining}
          total={todos.length}
          hasCompleted={hasCompleted}
          onClearCompleted={clearCompleted}
        />
        <TodoList todos={todos} onToggle={toggleTodo} onEdit={editTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
}
