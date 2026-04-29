// import { useState } from 'react'

function AddNote(props) {
  
  const {} = props


  return (
    <div className="new-note-wrapper">
      <div className="new-note-title-wrapper">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABS0lEQVR4AcyU0W3CMBCG78gEpWqivtFJWjbpJqWTtJuUTcgbSqSWCRrj3+GQ7fggcYRElMPmjL8PO84t6MbX/Qv2+8OqaX4/EKnNmLUCwIvCfBHzBtG0fzvkfFG2ACDADdEbEdXUx2pRmB/bP99ZghhelcuX7p/XlgqR2zLbd/dkQQR3EOTQ4X4V6J5jkgAgbVv8fFU9fophtCCGx9sizwJ5gaMdJUjBMRnhbUsdwzF+VaDBtTygflwUaBAt74Olrwo0iJYXYNwmBRpEy8dQ//tAoEG0vA9L9QeC4DzbNxSTcuGYOxCczjPJkZsDHwja9vCOJJH5RjsXDkawAkPdK5JM7AqWrYw7c6qWsiKMT4lAQMQoveSgqPHkruQb6kZGfAQC7qthbdstGbPpmNe5/1zcgaAslw7oWlsRn58etvLD3DYQ5EIuzbu54AgAAP//yjmolQAAAAZJREFUAwB5r9Yx9M38hgAAAABJRU5ErkJggg==" className="new-note-title-img"/>
        <h2 className="new-note-title">Новая заметка</h2>
      </div>
      <input type="text" placeholder="Заголовок заметки..." className="new-note-input"/>
      <div className="new-note-tags-wrapper">

      </div>
      {/* <div className="new-note-main-section-wrapper"> */}
      <input type="text" placeholder="Начни писать свою заметку..." className="new-note-main-section"/>
      {/* </div> */}
      <div className="new-note-status-wrapper"></div>
    </div>
  )
}

export default AddNote
