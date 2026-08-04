export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  dueDate: string | null; // ISO date string (yyyy-mm-dd), or null if no due date
  createdAt: number;
}
