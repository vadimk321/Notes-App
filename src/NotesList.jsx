 import { useEffect, useMemo } from 'react'
import NoteItem from './NoteItem.jsx'

function NotesList(props) {
  
  const {
    notes,
    filters,
    deleteNote,
    setIsEdding,
    setTextContent,
    setTextTitle
  } = props

  // Фильтрация заметок
  const filteredNotes = useMemo(() => {
    
    const result = [...notes];
    if (filters.filter === 'all') {
      return result
    }

  })

  return (
    <div className="notes-list-wrapper"> 
      <div className="notes-list-title">
        <div>
          <h2>Все заметки</h2>
          <h5 className="notes-subtitle-counter">
            Заметок: {notes.length} 
          </h5>
        </div>
        <button className="switch-theme-btn">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB60lEQVR4AcyUC27qMBBFExAgdgE7gZU8WMlLVxK6ErqTsgsECNJz3MRNsVs1UqsW+TL2eO7c8S+j4od/f0vgfD43Ysiif2cFVFkfj8fFVys1Fs5Ge89JVkBgTdBmPB7v7wnT6bQUzMdmDLFy6tFo9C9OtJ1E4Hq9PjB3AIscAf+7RvIVDnGYzWZyGb61RGA+nx8QWTdNU3WEy+WycmXgucVen2lY0Q67xS6xSUsEjFCkS07CDWJ7/BvguYiVvtPp9B9fQXJF7CbICnRRbZXub0HCipUthX1iDmVZVp4B/Q/bpwIkChViw3a5MuHq8IWqOYNQwEcKUYCtCI9I2wv28AoT9nyh2/OFGJ1yOzgWUcBBBt6mIrcNPV+IyXCDKwpwUOGOa8PM618g565rzxdiDJfbwbGIAg7uwSGGe42tWHp8qd4efcZjQ4z9HD4VmEwmTxxm1RJrDtR30JC0822NaeezJivg/lqxDA+ThGv6T6Dbjp0+tiPcJFckh/mkJQIGUqlXr5YowypJtgZL4FnFyo1BrIKTfLvkJgIEeu1E9tsiqY/b7fbI2JUt4IZ3wzi2RIAKd+47Nvm2sG3hrUQ2HR8er9st3MHZ4nrXEgFn3XftV6FILrn8rIAT34VBAlTpAZdDxAcJDEncxb4AAAD//yDIG0YAAAAGSURBVAMA56z4MaAT3WQAAAAASUVORK5CYII="/>
        </button>
      </div>
      <hr className="notes-list-hr"/>
      <ul className ="notes-list-group">
        {filteredNotes.map(note => (
          <NoteItem 
            note={note}
            key={note.id + note.createdAt}
            deleteNote={deleteNote}
            setIsEdding={setIsEdding}
            setTextContent={setTextContent}
            setTextTitle={setTextTitle}
            />))}
      </ul>
    </div>
  )
}

export default NotesList
