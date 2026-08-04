---
status: implemented
title: Personal Daily Todo App with Due Dates
---

1. Create `src/types/todo.ts` defining a shared Todo type with fields: id, title, completed, dueDate (optional), createdAt. This gives the whole app a consistent shape for tasks.

2. Create `src/lib/todos.ts` with helper functions to load todos from and save todos to the browser's local storage, plus small utilities to add, toggle complete, edit, delete, and sort todos (e.g. incomplete first, then by due date, then by creation time).

3. Create `src/hooks/useTodos.ts` — a custom hook that manages the list of todos in state, initializes from local storage on load, and persists to local storage whenever the list changes. Expose actions: addTodo, toggleTodo, editTodo, deleteTodo.

4. Create `src/components/TodoInput.tsx` — an input row with a text field for the task title and a date picker for an optional due date, plus an "Add" button. Pressing Enter or clicking Add creates a new task.

5. Create `src/components/TodoItem.tsx` — displays a single task with a checkbox to mark complete/incomplete, the title, the due date if set (highlighted if overdue), an edit control (click title to rename), and a delete button.

6. Create `src/components/TodoList.tsx` — renders the list of TodoItem components using data and actions from useTodos, and shows an empty state message ("No tasks yet — add one above!") when there are no tasks.

7. Create `src/components/TodoSummary.tsx` — a small header/footer showing counts, e.g. "3 of 7 tasks remaining," and a "Clear completed" button to remove all completed tasks at once.

8. Create `src/routes/index.tsx` as the main todo page: a centered card layout containing an app title ("My Tasks"), TodoSummary, TodoInput, and TodoList, wired together via the useTodos hook.

9. Update `src/routes/__root.tsx` to set the page background and center the app content, giving the page a clean, friendly look suited to a personal daily task list (soft background color, readable spacing, rounded card container).

10. Style all components using Tailwind CSS v4 utility classes: clear visual distinction between completed (strikethrough, muted) and active tasks, red/orange accent for overdue due dates, and comfortable spacing/typography for quick daily use on both desktop and mobile widths.

11. Verify the app: adding a task with and without a due date, marking complete/incomplete, editing a title, deleting a task, clearing completed tasks, and reloading the browser to confirm tasks persist via local storage.
