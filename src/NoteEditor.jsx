import { useState } from 'react'
import NoteTextarea from './NoteTextarea.jsx'
import NoteInputTitle from './NoteInputTitle.jsx'

function NoteEditor(props) {

   const {notes,
          addNote,
          setFilters,
          isNoteEmpty
        } = props

  function handlerAddNote(){
    const result = {
      id: new Date().toISOString(),


      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),

      tags: [],

      isPinned: false,
      isFavorite: false,
      isDeleted: false,

      color: null,
    };

    setFilters(prev => ({
      ...prev,
      category: 'all'
    }))
    addNote(result);
  } 

  return (
    <div className="new-note-wrapper">
      <div className="new-note-title-wrapper">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABS0lEQVR4AcyU0W3CMBCG78gEpWqivtFJWjbpJqWTtJuUTcgbSqSWCRrj3+GQ7fggcYRElMPmjL8PO84t6MbX/Qv2+8OqaX4/EKnNmLUCwIvCfBHzBtG0fzvkfFG2ACDADdEbEdXUx2pRmB/bP99ZghhelcuX7p/XlgqR2zLbd/dkQQR3EOTQ4X4V6J5jkgAgbVv8fFU9fophtCCGx9sizwJ5gaMdJUjBMRnhbUsdwzF+VaDBtTygflwUaBAt74Olrwo0iJYXYNwmBRpEy8dQ//tAoEG0vA9L9QeC4DzbNxSTcuGYOxCczjPJkZsDHwja9vCOJJH5RjsXDkawAkPdK5JM7AqWrYw7c6qWsiKMT4lAQMQoveSgqPHkruQb6kZGfAQC7qthbdstGbPpmNe5/1zcgaAslw7oWlsRn58etvLD3DYQ5EIuzbu54AgAAP//yjmolQAAAAZJREFUAwB5r9Yx9M38hgAAAABJRU5ErkJggg==" className="new-note-title-img"/>
        <h2 className="new-note-title">Новая заметка</h2>
      </div>

      <NoteInputTitle
      />
      {/* <div className="new-note-tags-wrapper"> Когда нибудь тут будут теги*/}

      {/* </div> */}
      <NoteTextarea
      />
      <div className="new-note-status-wrapper">
        <button 
          className="new-note-btn-add"
          onClick={handlerAddNote}
        >Сохранить</button>
      </div>
    </div>
  )
}

export default NoteEditor
