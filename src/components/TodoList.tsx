import type { Todo } from '@/types/todo';
import { TodoItem } from '@/components/TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onEdit: (id: string, title: string) => void;
  onDelete: (id: string) => void;
}

export function TodoList({ todos, onToggle, onEdit, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return <p className="px-6 py-10 text-center text-sm text-slate-400">No tasks yet — add one above!</p>;
  }

  return (
    <ul className="divide-y divide-slate-100 pb-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  );
}
