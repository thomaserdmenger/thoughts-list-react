import * as React from "react";

export default function AddThoughtForm() {
  const [text, setText] = React.useState("");

  const handleChange = ({ target }) => {
    const { value } = target;
    setText((prevEvent) => value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
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
