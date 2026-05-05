// import { useState } from 'react'
import StarIcon from './StarIcon.jsx'
import DeleteIcon from './DeleteIcon.jsx'
import RestoreIcon from './RestoreIcon.jsx';

function NoteItem(props) {
  
  const {
    note,
    deleteNote,
    setIsEdding,
    setTextContent,
    setTextTitle,
    toggleFavorite,
    setFilters,
    restoreNote
  } = props

  const date = note.updatedAt.split('T')[0].split('-');

  function handlerDeleteNote(e, id) {
    e.stopPropagation();
    deleteNote(id);
  }

  function handlerRestoreNote(e, id) { 
    e.stopPropagation();
    restoreNote(id);
  }

  function editNote(){
    setTextTitle(note.title)
    setTextContent(note.content)
    setIsEdding(true);
    setFilters(prev => ({
      ...prev,
      category: ''
    }))
  }

  function handlerToggleFavorite() {
    toggleFavorite(note.id);
  }

  return (
    <div className="note-item-wrapper-btn" onClick={editNote}>
      <li className="note-item-wrapper">
        <div>
          <h5 className="note-title">{note.title}</h5>
          
            {!note.isDeleted 
            ? <button 
                onClick={(e) => {handlerDeleteNote(e, note.id)}}
                className="note-item-del-btn"
              >
                <DeleteIcon/> 
              </button>
            : <button 
                onClick={(e) => {handlerRestoreNote(e, note.id)}}
                className="note-item-del-btn"
              >
                <RestoreIcon/>
              </button>  }
         
        </div>
        <p className="note-text">{note.content}</p>
        <span className="note-date">{`${date[2]}.${date[1]}.${date[0].split('')[2]}${date[0].split('')[3]}`}</span>
         
          {!note.isDeleted 
          ? <button
              onClick={(e) => {
              e.stopPropagation();
              handlerToggleFavorite();
            }}
            className="note-item-star-btn"
          >
            <StarIcon  filled={note.isFavorite}/>
          </button> : null}
        {/* Временная кнопка */}
      </li> 
    </div>
  )
}

export default NoteItem
