import * as React from "react";

import generateId from "./utilities/utilities";

const initialThoughts = [
  { id: generateId(), text: "This is a place for your passing thoughts." },
  { id: generateId(), text: "They'll be removed after 15 seconds." },
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
        <ul>
          {thoughts.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
          {thoughts.map((item) => console.log(item.id))}
        </ul>
      </main>
    </React.Fragment>
  );
}
