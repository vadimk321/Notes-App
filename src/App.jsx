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

  const [allTags, setAllTags] = useState(() => {
    const saved = localStorage.getItem('tags');
    return saved ? JSON.parse(saved) : [];
  })

  // Нужен для передачи в едитор при клике на таск
  const editingNote = notes.find(n => n.id === editingId);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('tags', JSON.stringify(allTags))
  }, [allTags]);
  
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

  function exitEditor(filter) {
    if (editingNote && !editingNote.title && !editingNote.content) {
      setNotes(prev => prev.filter(item => item.id !== editingNote.id));
    }

    setEditingId(null);
    setFilters(prev => ({
      ...prev,
      category: filter
    }));
  }

  return (
      <div className="main-wrapper">
        <Sidebar
          setFilters={setFilters}
          notesCountAll={notes.filter((note) => !note.isDeleted).length}
          notesCountDeleted={notes.filter((note) => note.isDeleted).length}
          notesCountFavorite={notes.filter((note) => note.isFavorite).length}
          filters={filters}
          setEditingId={setEditingId}
          setNotes={setNotes}
          exitEditor={exitEditor}
          allTags={allTags}
        />
        {editingId 
        ? <NoteEditor 
          note={editingNote}
          setNotes={setNotes} 
          exitEditor={exitEditor}
          setAllTags={setAllTags}
          allTags={allTags}
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
