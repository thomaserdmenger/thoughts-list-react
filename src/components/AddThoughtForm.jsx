import * as React from "react";

import generateId from "../utilities/utilities";

export default function AddThoughtForm({ addThought }) {
  const [text, setText] = React.useState("");

  const handleChange = ({ target }) => {
    const { value } = target;
    setText((prevEvent) => value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const thought = {
      id: generateId(),
      text: text,
    };

    addThought(thought);

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={text}
        onChange={handleChange}
        placeholder="Add your thought here"
      />
      <button type="submit">Add</button>
    </form>
  );
}
