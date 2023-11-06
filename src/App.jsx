import * as React from "react";

import generateId from "./utilities/utilities";

import AddThoughtForm from "./components/AddThoughtForm";
import Thought from "./components/Thought";

const initialThoughts = [
  { id: generateId(), text: "This is a place for your passing thoughts." },
  { id: generateId(), text: "They'll be removed after 15 seconds." },
];

export default function App() {
  const [thoughts, setThoughts] = React.useState(initialThoughts);

  const addThought = (thought) => {
    setThoughts((prevThoughts) => [thought, ...prevThoughts]);
  };

  const removeThought = (id) => {
    setThoughts((prevThought) => prevThought.filter((item) => item.id !== id));
  };

  return (
    <React.Fragment>
      <header>
        <h1>💭 Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul>
          {thoughts.map((thought) => (
            <Thought
              key={thought.id}
              thought={thought}
              removeThought={removeThought}
            />
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
}
