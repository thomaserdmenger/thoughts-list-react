import * as React from "react";

const initialThoughts = [
  { id: 1, text: "This is a place for your passing thoughts." },
  { id: 2, text: "They'll be removed after 15 seconds." },
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
        </ul>
      </main>
    </React.Fragment>
  );
}
