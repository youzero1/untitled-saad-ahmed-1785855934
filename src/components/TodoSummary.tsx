interface TodoSummaryProps {
  remaining: number;
  total: number;
  hasCompleted: boolean;
  onClearCompleted: () => void;
}

export function TodoSummary({ remaining, total, hasCompleted, onClearCompleted }: TodoSummaryProps) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
      <p className="text-sm font-medium text-slate-500">
        {total === 0 ? 'No tasks yet' : `${remaining} of ${total} tasks remaining`}
      </p>
      {hasCompleted && (
        <button
          onClick={onClearCompleted}
          className="text-sm font-medium text-slate-400 transition hover:text-yellow-600"
        >
          Clear completed
        </button>
      )}
    </div>
  );
}
