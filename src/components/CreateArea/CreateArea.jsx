import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

function submitNote(event) {
  event.preventDefault();
  if (note.title.trim() === "" && note.content.trim() === "") {
    return; 
  }
  props.onAdd(note);
  setNote({
    title: "",
    content: ""
  });
}
  return (
    <div className="flex justify-center mt-8">
      <form
        onSubmit={submitNote}
        className="bg-white p-6 rounded-md shadow-md w-full max-w-xl flex flex-col gap-4"
      >
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          className="border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <button
          type="submit"
          className="self-end bg-yellow-500 text-white font-semibold px-5 py-2 rounded hover:bg-yellow-600 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
