import { useState } from 'react'
import NoteTextarea from './NoteTextarea.jsx'
import NoteInputTitle from './NoteInputTitle.jsx'

function AddNote(props) {
  const [textContent, setTextContent] = useState('');
  const [textTitle, setTextTitle] = useState('');

   const {notes,
          setNotes,
          setIsAdding
        } = props

  const handleAddNote = () => {
    setNotes(prev => {
      return [...prev , {
        id: new Date().toISOString(),
        title: textTitle,
        content: textContent,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: null,
        isPinned: false,
        color: null,
      }]
    })
    setIsAdding(false)
  } 

  return (
    <div className="new-note-wrapper">
      <div className="new-note-title-wrapper">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABS0lEQVR4AcyU0W3CMBCG78gEpWqivtFJWjbpJqWTtJuUTcgbSqSWCRrj3+GQ7fggcYRElMPmjL8PO84t6MbX/Qv2+8OqaX4/EKnNmLUCwIvCfBHzBtG0fzvkfFG2ACDADdEbEdXUx2pRmB/bP99ZghhelcuX7p/XlgqR2zLbd/dkQQR3EOTQ4X4V6J5jkgAgbVv8fFU9fophtCCGx9sizwJ5gaMdJUjBMRnhbUsdwzF+VaDBtTygflwUaBAt74Olrwo0iJYXYNwmBRpEy8dQ//tAoEG0vA9L9QeC4DzbNxSTcuGYOxCczjPJkZsDHwja9vCOJJH5RjsXDkawAkPdK5JM7AqWrYw7c6qWsiKMT4lAQMQoveSgqPHkruQb6kZGfAQC7qthbdstGbPpmNe5/1zcgaAslw7oWlsRn58etvLD3DYQ5EIuzbu54AgAAP//yjmolQAAAAZJREFUAwB5r9Yx9M38hgAAAABJRU5ErkJggg==" className="new-note-title-img"/>
        <h2 className="new-note-title">Новая заметка</h2>
      </div>

      <NoteInputTitle
        textTitle={textTitle}
        setTextTitle={setTextTitle}
      />
      <div className="new-note-tags-wrapper">

      </div>
      {/* <div className="new-note-main-section-wrapper"> */}
      <NoteTextarea
        textContent={textContent}
        setTextContent={setTextContent}  
      />
      {/* </div> */}
      <div className="new-note-status-wrapper">
        <button 
          className="new-note-btn-add"
          onClick={handleAddNote}
        >Создать</button>
      </div>
    </div>
  )
}

export default AddNote
