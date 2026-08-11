import { useState } from 'react';
import type { Todo } from '@/types/todo';
import { isOverdue } from '@/lib/todos';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string, title: string) => void;
  onDelete: (id: string) => void;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

export function TodoItem({ todo, onToggle, onEdit, onDelete }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.title);
  const overdue = isOverdue(todo);

  function commitEdit() {
    setIsEditing(false);
    if (draft.trim() && draft.trim() !== todo.title) {
      onEdit(todo.id, draft);
    } else {
      setDraft(todo.title);
    }
  }

  return (
    <li className="flex items-center gap-3 px-6 py-3 group">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-5 w-5 shrink-0 cursor-pointer rounded border-slate-300 text-red-600 focus:ring-red-400"
      />

      <div className="min-w-0 flex-1">
        {isEditing ? (
          <input
            autoFocus
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={commitEdit}
            onKeyDown={(e) => {
              if (e.key === 'Enter') commitEdit();
              if (e.key === 'Escape') {
                setDraft(todo.title);
                setIsEditing(false);
              }
            }}
            className="w-full rounded border border-red-300 px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-red-100"
          />
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className={`block truncate text-left text-sm ${
              todo.completed ? 'text-slate-400 line-through' : 'text-slate-800'
            }`}
          >
            {todo.title}
          </button>
        )}
        {todo.dueDate && (
          <span className={`text-xs ${overdue ? 'font-medium text-amber-600' : 'text-slate-400'}`}>
            {overdue ? 'Overdue: ' : 'Due '}
            {formatDate(todo.dueDate)}
          </span>
        )}
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="shrink-0 text-slate-300 opacity-0 transition group-hover:opacity-100 hover:text-red-700"
        aria-label="Delete task"
      >
        ✕
      </button>
    </li>
  );
}
