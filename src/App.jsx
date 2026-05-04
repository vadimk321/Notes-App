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
    category: 'all',
  });
  // Тестовые объекта для проверки отрисовки айтемов
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  })
  

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
    setTextContent('')
    setTextTitle('')
  }

  function deleteNote(id) {
    setNotes(prev => {
      return prev.map(note => note.id === id ? {...note,isDeleted: true, isFavorite: false} : note)
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
          setIsEdding={setIsEdding}
          notesCountAll={notes.filter((note) => !note.isDeleted).length}
          notesCountDeleted={notes.filter((note) => note.isDeleted).length}
          notesCountFavorite={notes.filter((note) => note.isFavorite).length}
          setTextContent={setTextContent}
          setTextTitle={setTextTitle}
          filters={filters}
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
          setFilters={setFilters}
          isNoteEmpty={textContent.length > 0 && textTitle.length > 0}
        /> : 
        <NotesList 
          notes={notes} 
          filters={filters}
          deleteNote={deleteNote}
          setIsEdding={setIsEdding}
          setTextContent={setTextContent}
          setTextTitle={setTextTitle}
          toggleFavorite={toggleFavorite}
          setFilters={setFilters}
        />}
      </div>
  )
}

export default App
