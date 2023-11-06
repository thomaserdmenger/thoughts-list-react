import * as React from "react";

import generateId from "./utilities/utilities";
import AddThoughtForm from "./components/AddThoughtForm";

const initialThoughts = [
  { id: generateId(), text: "This is a place for your passing thoughts." },
  { id: generateId(), text: "They'll be removed after 15 seconds." },
];

export default function App() {
  const [thoughts, setThoughts] = React.useState(initialThoughts);

  return (
    <React.Fragment>
      <header>
        <h1>💭 Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm />
        <ul>
          {thoughts.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
}
