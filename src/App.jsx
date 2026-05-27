import { useState, useEffect } from 'react';
import { stripHtml } from './utils/stripHtml.js';
import { 
  deleteNote, 
  restoreNote, 
  toggleFavorite, 
  toggleTag, 
  removeTagFromNotes
 } from './utils/noteActions.js'

import Sidebar from './Sidebar.jsx';
import NotesList from './NotesList.jsx'
import NoteEditor from './NoteEditor.jsx'

import './styles/App.css';

function App() {

  const [editingId, setEditingId] = useState(null);
  const [filters, setFilters] = useState({
    category: 'all',
    search: '',
    sort: 'updated'
  });

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('notes');

    if (!saved) return [];

    return JSON.parse(saved).filter(note => {
      
      const plainText = stripHtml(note.content).trim();

    return plainText !== '' || note.title.trim() !== ''
    });
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

  function deleteTag(tagId) {
    setNotes(prev => removeTagFromNotes(prev, tagId));

    setAllTags(prev => 
      prev.filter(tag => tag.id !== tagId));

    setFilters(prev => ({
      ...prev,
      category: 'all'
    }))
  }

  function exitEditor(filter) {

    if (editingNote) {
      const plainText = stripHtml(editingNote.content).trim();

      // Проверка на пустую заполняемую заметку
      if (!editingNote.title.trim() && !plainText) {
      
          setNotes(prev => prev.filter(item => item.id !== editingNote.id));
      }
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
          filters={filters}
          setFilters={setFilters}
          notes={notes}
          setNotes={setNotes}
          allTags={allTags}
          setEditingId={setEditingId}
          exitEditor={exitEditor}

          notesCountAll={notes.filter((note) => !note.isDeleted).length}
          notesCountDeleted={notes.filter((note) => note.isDeleted).length}
          notesCountFavorite={notes.filter((note) => note.isFavorite).length}
        />
        {editingId 
        ? <NoteEditor 
          note={editingNote}
          setNotes={setNotes} 
          exitEditor={exitEditor}
          setAllTags={setAllTags}
          allTags={allTags}
          toggleTag={toggleTag}
          toggleFavorite={toggleFavorite}
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
          setNotes={setNotes}
        />}
      </div>
  )
}

export default App
