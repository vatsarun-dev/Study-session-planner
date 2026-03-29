# Study Planner

Study Planner is a React + Vite app for creating, viewing, and deleting study-session cards. It uses a clean split layout on desktop and a stacked layout on mobile so the app stays usable on smaller screens.

## Features

- Add a new study session from a form
- Show saved sessions as cards on the dashboard
- Delete any saved session from the dashboard
- Store shared UI and session state with Context API
- Manage form inputs with `react-hook-form`
- Generate unique ids for each session with `nanoid`
- Responsive layout for navbar, dashboard, and form
- Styled card-based radio selections for duration and difficulty

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Hook Form
- Context API
- Nano ID
- Remix Icon

## Project Flow

### 1. App layout

The app renders:

- `Navbar`
- `Dashboard` when the dashboard view is active
- `Form` when the new-session view is active

The top-level view toggle is controlled through Context API.

### 2. Context API

The shared state lives in [`src/context/MyContext.jsx`](./src/context/MyContext.jsx).

It currently manages:

- `click`
  Controls whether the app shows the dashboard or the form
- `setClick`
  Updates the current visible screen
- `data`
  Stores all study sessions in an array
- `setData`
  Adds and removes session objects

Each session is stored as an object with fields like:

```js
{
  id: "unique-id",
  fDev: "Intro to Frontend Development",
  sub: "webDev",
  date: "2026-03-30",
  time: "45min",
  level: "medium",
  notes: "Practice components and props"
}
```

### 3. Adding a session

The form lives in [`src/components/form.jsx`](./src/components/form.jsx).

It uses `react-hook-form` for:

- registering fields
- handling submit
- resetting the form after save

When the form is submitted:

1. A new object is created from the form data
2. `nanoid()` generates a unique `id`
3. The new session is appended to the context `data` array
4. The form resets
5. The app switches back to the dashboard

Core logic:

```js
setData((prev) => [...prev, { ...data, id: nanoid() }]);
```

### 4. Rendering cards

The dashboard lives in [`src/components/Dashboard.jsx`](./src/components/Dashboard.jsx).

Cards are rendered using `map()`:

```jsx
{data.map((session) => (
  <div key={session.id}>...</div>
))}
```

The dashboard checks `data.length > 0`:

- if sessions exist, cards are shown
- if the array is empty, an empty-state message is shown

### 5. Deleting a session

Each card has a delete button.

Delete works by filtering the `data` array and removing the session whose `id` matches:

```js
setData((prev) => prev.filter((item) => item.id !== id));
```

This keeps the update predictable and avoids mutating state directly.

## Form Fields

The study-session form collects:

- Topic
- Subject
- Session Date
- Notes
- Duration
- Level of Difficulty

The duration and difficulty fields are styled as selectable cards instead of default radio buttons.

## Responsive Design

The app is responsive across the main screens:

- On desktop:
  Navbar stays on the left and the content area sits beside it
- On mobile:
  Navbar moves to the top and content stacks vertically
- Dashboard cards resize and wrap content better on smaller screens
- Form sections stack vertically on smaller viewports
- Action buttons expand to full width where needed on mobile

## Folder Structure

```text
study-planner/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Dashboard.jsx
│  │  ├─ form.jsx
│  │  └─ Navbar.jsx
│  ├─ context/
│  │  └─ MyContext.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ package.json
└─ README.md
```

## How to Run

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Important Concepts Used

### Context API

Used for app-wide shared state so multiple components can read and update the same session data without prop drilling.

### React Hook Form

Used to simplify form handling and reduce repeated state code for inputs.

### Immutable updates

The app uses immutable array updates like:

```js
setData((prev) => [...prev, newItem]);
setData((prev) => prev.filter((item) => item.id !== id));
```

This is the recommended React pattern for list state.

### Dynamic styling

The dashboard uses mapping objects to assign card colors based on:

- selected subject
- selected difficulty level

## Possible Improvements

- Save sessions in `localStorage`
- Add edit/update session functionality
- Add validation error messages below fields
- Add category filters on the dashboard
- Add search and sorting
- Add a completed/in-progress status

## Author

Built as a study-planner project using React, Context API, Tailwind CSS, and React Hook Form.
"# Study-session-planner" 
