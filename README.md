# This repo is for basic understanding and let's you understand the foundation of React concepts.


### React's efficiency comes from two primary concepts that handle how data is displayed and updated. 
**Virtual DOM:** Instead of updating the browser's real DOM directly (which is slow), React creates a lightweight in-memory copy called the Virtual DOM. 

**Reconciliation:** When data changes, React compares the new Virtual DOM with the previously created virtual DOM—a process called diffing—and updates only the specific parts of the real DOM that actually changed. It never reads from real DOM as it is time consuming.

### Every React application is built on these three fundamental building blocks:

**Components:** Small, independent pieces of UI that can be reused across the app (e.g., a Navbar, Button, or UserProfile).

**Props (Properties):** The initial data passed from a parent to a child component. Props are read-only(immutable), a child component cannot change the props it receives. These are used to make components dynamic (e.g., passing a specific title to a generic Header component).

**State:** Internal data that belongs to the component and can change over time based on user actions (like clicking a button). Unlike props, state can be updated(Mutable). Similarly When state changes, React automatically re-renders the component to reflect the new data.


### What are React Hooks ?
Hooks are functions that let you "hook into" React features from functional components without writing classes.

The Hooks used in this repo are:
<table align="center">
  <tr>
    <th>Hook</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td>useState</td>
    <td>Manages local state in a component.</td>
  </tr>
  <tr>
    <td>useEffect</td>
    <td>Handles side effects like data fetching, subscriptions, or manual DOM updates.</td>
  </tr>
    <td>useContext</td>
    <td>Shares data globally across the component tree, avoiding "prop drilling".</td>
  </tr>
    <td>useRef</td>
    <td>Creates a direct reference to a DOM element or persists values between renders.</td>
  </tr>
</table> 

Hooks must be called inside and at top of the functional Component.


### What is Vite, React Router and Redux ?

**Vite:** The modern, fast build tool recommended for setting up new React projects.
**React Router:** The standard library for adding navigation (multiple pages) to a single-page app.
**Redux:** Library used for global state management in large, complex applications.

