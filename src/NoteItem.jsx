// import { useState } from 'react'

function NoteItem(props) {
  
  const {
    note,
    deleteNote,
    setIsEdding,
    setTextContent,
    setTextTitle
  } = props

  const date = note.updatedAt.split('T')[0].split('-');

  function handlerDeleteNote(e,id) {
    e.stopPropagation()
    deleteNote(id)
  }

  function editNote(){
    setTextTitle(note.title)
    setTextContent(note.content)
    setIsEdding(true);
  }

  return (
    <div className="note-item-wrapper-btn" onClick={editNote}>
      <li className="note-item-wrapper">
        <h5 className="note-title">{note.title}</h5>
        <p className="note-text">{note.content}</p>
        <span className="note-date">{`${date[2]}.${date[1]}.${date[0].split('')[2]}${date[0].split('')[3]}`}</span>
        <button 
          onClick={(e) => {handlerDeleteNote(e, note.id)}}
          className="btn-del-note"
          >Удалить</button> 
        {/* Временная кнопка */}
      </li> 
    </div>
  )
}

export default NoteItem
