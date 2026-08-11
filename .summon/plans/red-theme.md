---
status: pending
title: Switch App Color Theme to Red
---

1. Update `src/styles/global.css`: change the page background, card background/border, and any accent colors currently using blue/purple/gray tones to a red-based palette (e.g. soft red background, white cards with red borders/accents). Outcome: the overall page background and card container appear in red tones instead of the current colors.
2. Update `src/components/TodoSummary.tsx`: change the progress bar fill, counters, and any highlighted text/icons to shades of red. Outcome: the "remaining tasks" summary bar and text are red-themed.
3. Update `src/components/TodoInput.tsx`: change the "Add" button and input focus ring/border colors to red. Outcome: the add-task button is red and the input highlights in red when focused.
4. Update `src/components/TodoItem.tsx`: change the checkbox checked-state color, hover states, and edit/delete icon accent colors to red, while keeping the existing overdue-red highlight visually distinct (e.g. use a darker/brighter red or an outline so overdue tasks are still noticeable against the red theme). Outcome: checkboxes and interactive icons use red, and overdue tasks remain visually distinguishable.
5. Update `src/components/TodoList.tsx`: change the "Clear completed" button and any divider/border colors to match the red theme. Outcome: all list controls visually match the new red color scheme.
6. Review `src/routes/index.tsx` for any remaining color classes (e.g. header text, page title) and update them to red accents so the whole page looks cohesive. Outcome: the entire app — header, cards, buttons, and controls — consistently uses a red color scheme.
