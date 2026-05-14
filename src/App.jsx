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
      return prev.map(note => note.id === id ? {...note, isDeleted: true, isFavorite: false} : note)
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

  function toggleTag(idTag, idNote) {
    const resultNote = notes.find(note => note.id === idNote); 
    const isHasTag = resultNote.tags.includes(idTag);

    !isHasTag ?
      setNotes(prev => 
        prev.map(note => 
          note.id === idNote ? { 
            ...note, 
            tags: [...note.tags, idTag]
          }
            : note
        ) 
      ) : 
      setNotes(prev => 
        prev.map(note => {
          if (note.id === idNote) {
            return { 
              ...note, 
              tags: note.tags.filter(tag => tag !== idTag)
            }}

          else {
            return note
          }
        })
      )

    console.log(notes.filter(note => note.id === idNote));
  };

  function deleteTag(tagId) {
    setNotes(prev => prev.map(note => ({
      ...note,
      tags: note.tags.filter(tag => tag !== tagId)
    })));
    setAllTags(prev => prev.filter(tag => tag.id !== tagId));
    setFilters(prev => ({
      ...prev,
      category: 'all'
    }))
  }

  function exitEditor(filter) {
    // Проверка на пустую заполняемую заметку
    if (editingNote && !editingNote.title && !editingNote.content) {
      setNotes(prev => prev.filter(item => item.id !== editingNote.id));
    }

    setEditingId(null);
    setFilters(prev => ({
      ...prev,
      category: filter,
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
          notes={notes}
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
          toggleTag={toggleTag}
        /> 
        : <NotesList 
          notes={notes} 
          filters={filters}
          deleteNote={deleteNote}
          toggleFavorite={toggleFavorite}
          setFilters={setFilters}
          restoreNote={restoreNote}
          setEditingId={setEditingId}
          allTags={allTags}
          deleteTag={deleteTag}
        />}
      </div>
  )
}

export default App
