import * as React from "react";

export default function Thought({ thought, removeThought }) {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      removeThought(thought.id);
    }, 15000);

    return () => clearTimeout(timeout);
  }, [thought]);

  const handleClick = () => {
    removeThought(thought.id);
  };

  return (
    <li style={{ listStyle: "none" }}>
      <button
        onClick={handleClick}
        style={{ marginRight: "1rem", marginBottom: "0.5rem" }}
      >
        x
      </button>
      <span>{thought.text}</span>
    </li>
  );
}
