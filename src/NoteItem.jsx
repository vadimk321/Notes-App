// import { useState } from 'react'
import StarIcon from './StarIcon.jsx';
import DeleteIcon from './DeleteIcon.jsx';
import RestoreIcon from './RestoreIcon.jsx';
import TagNoteItem from './TagNoteItem.jsx';
import DateItem from './DateItem.jsx'

function NoteItem(props) {
  
  const {
    note,
    deleteNote,
    toggleFavorite,
    setFilters,
    restoreNote,
    setEditingId,
    allTags
  } = props
  
  
  // Счётчик тегов, которые не влезли в карточку
  const countMoreTags = note.tags.slice(2).length;
  
  function handlerDeleteNote(e, id) {
    e.stopPropagation();
    deleteNote(id);
  }

  function handlerRestoreNote(e, id) { 
    e.stopPropagation();
    restoreNote(id);
  }

  function editNote(){
    if (note.isDeleted) {
      return;
    }
    setEditingId(note.id)
    setFilters(prev => ({
      ...prev,
      category: ''
    }))
  }

  function handlerToggleFavorite(e) {
    e.stopPropagation();
    toggleFavorite(note.id);
    console.log(testDate)
  }

  return (
    <div 
      className={`note-item-wrapper-btn`} 
      onClick={editNote}>
      <li className={`note-item-wrapper ${note.isDeleted ? 'deleted' : ''}`}>
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
        <div className="note-text"
          dangerouslySetInnerHTML={{
            __html: note.content
          }}
        />
        <div className="note-tags-wrapper">
          {note.tags.slice(0, 2).map(tag => {
            return <TagNoteItem
            key={note.id + tag}
            tag={allTags.find(item => item.id === tag)}
          />
          }
          )}
          {countMoreTags > 0 ? <span className="note-count-more-tags">{`+${countMoreTags}`}</span> : null}
        </div>
        
        <DateItem 
          noteCreatedAt={note.createdAt}/>
          {!note.isDeleted 
          ? <button
            onClick={(e) => {handlerToggleFavorite(e);}}
            className="note-item-star-btn"
          >
            <StarIcon  filled={note.isFavorite}/>
          </button> : null}
      </li> 
    </div>
  )
}

export default NoteItem
