import { useState, useEffect } from 'react';

import Sidebar from './Sidebar.jsx';
import NotesList from './NotesList.jsx'
import AddNote from './AddNote.jsx'

import './styles/App.css';

function App() {

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
  }

  return (
      <div className="main-wrapper">
        <Sidebar
          filters={filters}
          setIsEdding={setIsEdding}
          notesCount={notes.length}
        />
        {IsEdding ? 
        <AddNote 
          notes={notes} 
          setNotes={setNotes} 
          setIsEdding={setIsEdding}
          addNote={addNote}
        /> : 
        <NotesList 
          notes={notes} 
          filters={filters}
        />}
      </div>
  )
}

export default App
