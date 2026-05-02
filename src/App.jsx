import { useState, useEffect } from 'react';

import Sidebar from './Sidebar.jsx';
import NotesList from './NotesList.jsx'
import AddNote from './AddNote.jsx'

import './styles/App.css';

function App() {

  const [textContent, setTextContent] = useState('');
  const [textTitle, setTextTitle] = useState('');
  const [IsEdding, setIsEdding] = useState(false);
  const [filters, setFilters] = useState({
    filter: 'all',
  });
  // Тестовые объекта для проверки отрисовки айтемов
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  })
  

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes]);

  function addNote(note){ 

    setNotes(prev => {
      return [...prev , note]
    })
    setTextContent('')
    setTextTitle('')
  }

  function deleteNote(id) {
    setNotes(prev => {
      const result = prev.filter(note => note.id !== id)
      return result
    })
  }

  return (
      <div className="main-wrapper">
        <Sidebar
          filters={filters}
          setIsEdding={setIsEdding}
          notesCountAll={notes.filter((note) => !note.isDeleted).length}
          notesCountDeleted={notes.filter((note) => note.isDeleted).length}
          notesCountFavorite={notes.filter((note) => note.isFavorite).length}
          setTextContent={setTextContent}
          setTextTitle={setTextTitle}
        />
        {IsEdding ? 
        <AddNote 
          notes={notes} 
          setNotes={setNotes} 
          setIsEdding={setIsEdding}
          addNote={addNote}
          textContent={textContent}
          setTextContent={setTextContent}
          textTitle={textTitle}
          setTextTitle={setTextTitle}
          isNoteEmpty={textContent.length > 0 && textTitle.length > 0}
        /> : 
        <NotesList 
          notes={notes} 
          filters={filters}
          deleteNote={deleteNote}
          setIsEdding={setIsEdding}
          setTextContent={setTextContent}
          setTextTitle={setTextTitle}
        />}
      </div>
  )
}

export default App
