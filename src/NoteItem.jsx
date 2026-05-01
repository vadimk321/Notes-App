// import { useState } from 'react'

function NoteItem(props) {
  
  const {
    note,
    deleteNote
  } = props

  const date = note.updatedAt.split('T')[0].split('-');

  function handlerDeleteNote(id) {
    deleteNote(id)
  }


  return (
    <div className="note-item-wrapper-btn">
      <li className="note-item-wrapper">
        <h5 className="note-title">{note.title}</h5>
        <p className="note-text">{note.content}</p>
        <span className="note-date">{`${date[2]}.${date[1]}.${date[0].split('')[2]}${date[0].split('')[3]}`}</span>
        <button 
          onClick={() => {handlerDeleteNote(note.id)}}
          className="btn-del-note"
          >Удалить</button> 
        {/* Временная кнопка */}
      </li> 
    </div>
  )
}

export default NoteItem
