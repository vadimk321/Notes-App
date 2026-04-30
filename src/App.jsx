import { useState, useEffect } from 'react';

import Sidebar from './Sidebar.jsx';
import NotesList from './NotesList.jsx'
import AddNote from './AddNote.jsx'

import './styles/App.css';

function App() {

  const [isAdding, setIsAdding] = useState(false);
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

  function addNote(task){ 
    const result = setNotes(prev => ({
      ...prev
    }))

    return [result, task]
    
  }

  return (
      <div className="main-wrapper">
        <Sidebar
          addNote={addNote}
          setIsAdding={setIsAdding}
        />
        {isAdding ? 
        <AddNote 
          notes={notes} 
          setNotes={setNotes} 
          setIsAdding={setIsAdding}
        /> : 
        <NotesList 
          notes={notes} 
          filters={filters}
        />}
      </div>
  )
}

export default App
