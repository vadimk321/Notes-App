import { useState } from 'react'
import NoteTextarea from './NoteTextarea.jsx'
import NoteInputTitle from './NoteInputTitle.jsx'
import TagItem from './TagItem.jsx'

function NoteEditor(props) {

   const {
          note,
          setNotes, 
          exitEditor,
          setAllTags,
          allTags
        } = props

  function handleChange(field, value) {
    setNotes(prev =>
      prev.map(item =>
        item.id === note.id
        ? {
          ...item,
          [field]: value,
          updatedAt: new Date().toISOString(),
        }
        : item
      )
    )
  }


  return (
    <div className="new-note-wrapper">
      <div className="new-note-title-wrapper">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABS0lEQVR4AcyU0W3CMBCG78gEpWqivtFJWjbpJqWTtJuUTcgbSqSWCRrj3+GQ7fggcYRElMPmjL8PO84t6MbX/Qv2+8OqaX4/EKnNmLUCwIvCfBHzBtG0fzvkfFG2ACDADdEbEdXUx2pRmB/bP99ZghhelcuX7p/XlgqR2zLbd/dkQQR3EOTQ4X4V6J5jkgAgbVv8fFU9fophtCCGx9sizwJ5gaMdJUjBMRnhbUsdwzF+VaDBtTygflwUaBAt74Olrwo0iJYXYNwmBRpEy8dQ//tAoEG0vA9L9QeC4DzbNxSTcuGYOxCczjPJkZsDHwja9vCOJJH5RjsXDkawAkPdK5JM7AqWrYw7c6qWsiKMT4lAQMQoveSgqPHkruQb6kZGfAQC7qthbdstGbPpmNe5/1zcgaAslw7oWlsRn58etvLD3DYQ5EIuzbu54AgAAP//yjmolQAAAAZJREFUAwB5r9Yx9M38hgAAAABJRU5ErkJggg==" className="new-note-title-img"/>
        <h2 className="new-note-title">{note.title ? 'Редактирование' : 'Новая заметка'}</h2>
      </div>
      <NoteInputTitle
        value={note.title}
        onChange={(val) => handleChange("title", val)}
      />
      <div className="new-note-tags-wrapper">
        <div className="new-note-tags-title">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABZElEQVR4AdyTQVLDMAxF5SSLZFo4Q7kJnIMVe9hwAQ4Be3Zco9yEXIAdpe1ME6Fv6hnbyI3CDBsylj22pP8c26roj79/BvjYHdab3cAGe9tueWU53eSIHLlLS5LErEY3ri2QBCCJvi3a2pWs4upCgnoxE0QFSLJv78znzFz7ybHrOtcL5IqITJAiQITPuv348LkfD3InjxR9cyBFgOhtmOheRrRbdLFZIUWAc24k4ieIyt+8YMzNAikCILZomztc9rJrrjHXbApyEqAJamsaJMSpAMv7DgLxyMR4WRRG+BKAOF6xaC0ixMKwocENz+67UPtl2+AZw0UJoOb6RlaxC1MRSSzl4nJnKES4vCUA7Swh4COVDr5457k4UhIAFqwQizj0fgCwOAWxikNLBcBRgswRh04RAKcGmTpz5MV2EoDAHBKeonahiM9tEoCEADnWSW8VR64JgEBAUEBzxJFnBiD4N/YFAAD//6LBGG8AAAAGSURBVAMAkKgKQFB6LwgAAAAASUVORK5CYII="/>
          <span>Теги</span>
        </div>
        <ul>
          {allTags ? allTags.map((tag) => <TagItem tag={tag}/>) : null}
        </ul>
        
      </div>
      <NoteTextarea
        value={note.content}
        onChange={(val) => handleChange("content", val)}
      />
      <div className="new-note-status-wrapper">
        <button 
          className="new-note-btn-add"
          onClick={exitEditor}
        >Готово</button>
      </div>
    </div>
  )
}

export default NoteEditor
