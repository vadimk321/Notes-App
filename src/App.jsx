import { useState, useEffect } from 'react';

import Sidebar from './Sidebar.jsx';
import NotesList from './NotesList.jsx'
import NoteEditor from './NoteEditor.jsx'

import './styles/App.css';

function App() {

  const [editingId, setEditingId] = useState(null);
  const [filters, setFilters] = useState({
    category: 'all',
  });


  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  })
  
  const editingNote = notes.find(n => n.id === editingId);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes]);

   useEffect(() => {
    console.log(filters)
  }, []);

  function addNote(note){ 

    setNotes(prev => {
      return [...prev , note]
    })
  }

  function deleteNote(id) {
    setNotes(prev => {
      return prev.map(note => note.id === id ? {...note,isDeleted: true, isFavorite: false} : note)
    })
  }

  function restoreNote(id) {
    setNotes(prev => {
      return prev.map(note => note.id === id ? {...note,isDeleted: false, isFavorite: false} : note)
    })
  }

  function toggleFavorite(id) {
  setNotes(prev =>
    prev.map(note =>
      note.id === id
        ? { ...note, isFavorite: !note.isFavorite }
        : note
    )
  );
};

  return (
      <div className="main-wrapper">
        <Sidebar
          setFilters={setFilters}
          notesCountAll={notes.filter((note) => !note.isDeleted).length}
          notesCountDeleted={notes.filter((note) => note.isDeleted).length}
          notesCountFavorite={notes.filter((note) => note.isFavorite).length}
          filters={filters}
          setEditingId={setEditingId}
        />
        {editingId 
        ? <NoteEditor 
          notes={notes} 
          setNotes={setNotes} 
          addNote={addNote}
          setFilters={setFilters}
          setEditingId={setEditingId}
        /> 
        : <NotesList 
          notes={notes} 
          filters={filters}
          deleteNote={deleteNote}
          toggleFavorite={toggleFavorite}
          setFilters={setFilters}
          restoreNote={restoreNote}
          setEditingId={setEditingId}
        />}
      </div>
  )
}

export default App
