---
status: pending
title: Switch App Color Theme to Yellow
---

1. Update `src/styles/global.css`: change the page background, card background/border, and any accent colors currently using blue/purple/gray/red tones to a yellow-based palette (e.g. soft yellow background, white cards with yellow borders/accents). Outcome: the overall page background and card container appear in yellow tones instead of the current colors.
2. Update `src/components/TodoSummary.tsx`: change the progress bar fill, counters, and any highlighted text/icons to shades of yellow/amber. Outcome: the "remaining tasks" summary bar and text are yellow-themed.
3. Update `src/components/TodoInput.tsx`: change the "Add" button and input focus ring/border colors to yellow/amber. Outcome: the add-task button is yellow and the input highlights in yellow when focused.
4. Update `src/components/TodoItem.tsx`: change the checkbox checked-state color, hover states, and edit/delete icon accent colors to yellow/amber, while keeping the existing overdue-red highlight visually distinct so overdue tasks remain clearly noticeable against the yellow theme. Outcome: checkboxes and interactive icons use yellow, and overdue tasks remain visually distinguishable.
5. Update `src/components/TodoList.tsx`: change the "Clear completed" button and any divider/border colors to match the yellow theme. Outcome: all list controls visually match the new yellow color scheme.
6. Review `src/routes/index.tsx` for any remaining color classes (e.g. header text, page title) and update them to yellow accents so the whole page looks cohesive. Outcome: the entire app — header, cards, buttons, and controls — consistently uses a yellow color scheme.
