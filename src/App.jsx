import { useState } from 'react';

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
  const [notes, setNotes] = useState([
    {
      id: 0,
      title: 'Идея для тестового проекта',
      content: 'Набросок с идеями для нового тестового проекта. Нужно что-нибудь, чтобы не сброситься в Неву, но и не деграднуть.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tags: null,
      isPinned: false,
      color: null,
    },
    {
      id: 1,
      title: 'Я ебал кабана в жопу',
      content: 'ДА!Я действительно ебал кабана в жопу И ВЫЕБУ ЕГО ЕЩЁ РАЗ! Даже не надейтесь что я перестану это делать.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tags: null,
      isPinned: false,
      color: null,
    },
    {
      id: 2,
      title: 'Я ебал кабана в жопу',
      content: 'ДА!Я действительно ебал кабана в жопу И ВЫЕБУ ЕГО ЕЩЁ РАЗ! Даже не надейтесь что я перестану это делать.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tags: null,
      isPinned: false,
      color: null,
    },
    {
      id: 3,
      title: 'Я ебал кабана в жопу',
      content: 'ДА!Я действительно ебал кабана в жопу И ВЫЕБУ ЕГО ЕЩЁ РАЗ! Даже не надейтесь что я перестану это делать.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tags: null,
      isPinned: false,
      color: null,
    },
    {
      id: 4,
      title: 'Я ебал кабана в жопу',
      content: 'ДА!Я действительно ебал кабана в жопу И ВЫЕБУ ЕГО ЕЩЁ РАЗ! Даже не надейтесь что я перестану это делать.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tags: null,
      isPinned: false,
      color: null,
    }
  ])
  

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
