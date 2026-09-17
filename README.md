# 🧱 Dev Stack

Dev Stack is a technology discovery app where you can browse frontend, backend, database, language, styling, and DevOps technologies, compare them at a glance, and build your own personal "stack" by adding the ones you want to use in your next project.

## 🛠 Tech Stack

- **React** (Vite) — component-based UI
- **Tailwind CSS** — utility-first styling
- **React-Toastify** — toast notifications for add/remove actions
- **JSON** — local data source for the technology catalog

## ✨ Features

1. **Browse technologies** — a responsive grid (1 column on mobile, 2 on tablet, 3 on desktop) of technology cards, each showing an icon, badge, category, difficulty, and star rating, loaded from a local JSON file instead of being hardcoded.
2. **Build your own stack** — click "Add to Stack" on any card to add it to the "Your Stack" panel. Adding the same technology twice shows a warning toast instead, and the card's border and button both update to show it's already been added.
3. **Manage your stack** — remove a single technology with its ✕ button, or clear everything at once with "Remove All," with a toast notification confirming every action.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📁 Project Structure 


---

❓ Common FAQ

**1. What is JSX, and why is it used in React?**

JSX lets you write something that looks like HTML right inside your JavaScript code. It's used because it's a much easier and clearer way to describe what should show up on the screen.

**2. What is the difference between props and state?**

Props are data passed **into** a component from its parent — the component just reads them and can't change them itself (like `tech` and `onAdd` in `TechCard`). State is data a component **owns and manages itself** using `useState`, and it can change over time based on user actions (like `stack` in `App.jsx`, which changes every time something is added or removed).

**3. What does the `useState` hook do, and where did you use it in this project?**

`useState` lets a component keep its own local data and update it across re-renders — whenever the state changes, React automatically re-renders the component to reflect it. I used it in `App.jsx` for `technologies`, `stack`, and `loading`, and in `Navbar.jsx` for `menuOpen` (whether the mobile menu is open).

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

`useEffect` runs code as a side effect after a component renders — things like network requests, timers, or subscriptions, which aren't part of the actual rendering. Fetching data is exactly that kind of side effect, so in `App.jsx` I used `useEffect` with an empty dependency array `[]` to fetch `technologies.json` exactly once, right after the app first loads.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

React uses the `key` to track which item is which between re-renders, so it can update just the right element instead of re-rendering the whole list from scratch. Without a stable, unique key (I used `tech.id`), React can mix up items or lose track of which card belongs to which data when the list changes — for example, when a technology gets added to or removed from the stack.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**

Conditional rendering means showing different JSX depending on some condition, similar to an `if` statement but for what gets displayed. In `StackSidebar.jsx`, I used it to show a "Your stack is empty." message when nothing has been added yet, and the actual list of technologies otherwise:

```jsx
{count === 0 ? (
  <div>Your stack is empty.</div>
) : (
  stack.map((tech) => <div key={tech.id}>...</div>)
)}
```

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

Parent → child: the parent passes data as **props**, like `<TechCard tech={tech} isAdded={isAdded} onAdd={handleAdd} />`. The child just reads those props to display its content. Child → parent: since a child can't directly change its parent's state, the parent passes a **function** down as a prop instead (like `onAdd`). When the child calls that function — for example, when its button is clicked — it runs code back in the parent, which updates the parent's state, and React re-renders both components with the new data.
