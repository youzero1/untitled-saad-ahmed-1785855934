---
status: pending
title: Multiple Theme Options for Todo App
---

1. `src/types/todo.ts` — Add a `Theme` type listing the available theme names: Light, Dark, Red, Blue, Green, Purple. Outcome: a single shared definition of valid theme choices used across the app.

2. `src/hooks/useTheme.ts` — Create a new hook that stores the currently selected theme in the browser's local storage, defaults to Light on first visit, and exposes the current theme plus a function to change it. Outcome: the chosen theme persists even after closing and reopening the app.

3. `src/styles/global.css` — Define a distinct color palette (background, card, text, accent/button colors) for each of the six themes using CSS variables scoped under a theme attribute. Outcome: each theme produces a visibly different color scheme for backgrounds, card surfaces, and accent colors (buttons, checkboxes, focus rings).

4. `src/routes/__root.tsx` — Apply the active theme by setting a theme attribute on the top-level page wrapper, read from the theme hook, so the CSS variables take effect app-wide. Outcome: switching themes instantly recolors the entire app, not just one section.

5. `src/components/ThemeSwitcher.tsx` — Build a new small control (a row of labeled color swatches or a dropdown) showing all six theme options, highlighting the currently active one, and letting the user click to switch. Outcome: users see all theme choices at a glance and can switch with one click.

6. `src/routes/index.tsx` — Place the new theme switcher control near the top of the task card (next to the title), and replace hard-coded color classes on the card, input, buttons, and checkboxes across `TodoInput.tsx`, `TodoSummary.tsx`, `TodoItem.tsx`, and `TodoList.tsx` with theme-aware styling driven by the CSS variables from step 3. Outcome: every part of the app (title, input, buttons, checkboxes, overdue highlights) consistently reflects the selected theme with no leftover hard-coded colors.
