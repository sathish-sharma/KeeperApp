import React from 'react';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="bg-white p-4 rounded-md w-full sm:w-60 shadow-md flex flex-col break-words overflow-hidden">
      <h1 className="text-xl font-semibold mb-2">{props.title}</h1>
      <p className="text-gray-800 text-base">{props.content}</p>
      <button
        onClick={handleClick}
        className="mt-4 self-end bg-red-500 text-white px-4 py-1 rounded hover:bg-green-800 transition-colors"
        aria-label="Delete note"
      >
        Delete
      </button>
    </div>
  );
}

export default Note;
