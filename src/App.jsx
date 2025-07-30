import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Note from './components/Note/Note.jsx';
import CreateArea from './components/CreateArea/CreateArea.jsx';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((noteItem,index) => index !== id));
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="flex flex-wrap justify-center gap-4 px-4 py-8 pb-32">
        {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
