import { useMemo } from 'react'
import NoteItem from './NoteItem.jsx'
import {getCategoryTitle} from './utils/getCategoryTitle.js'
import {getFilteredNotes} from './utils/getFilteredNotes.js'

function NotesList(props) {
  
  const {
    notes,
    filters,
    setFilters,
    allTags,
    deleteNote,
    toggleFavorite,
    restoreNote,
    setEditingId,
    deleteTag
  } = props

  let isHasTag = (allTags.find(tag => tag.id === filters.category));

  // Название текущего раздела.
  const categorySubtitle = getCategoryTitle(filters.category, allTags);

  // Фильтрация заметок
  const filteredNotes = useMemo(() => {
    return getFilteredNotes(notes, filters, isHasTag)
  }, [notes, filters, isHasTag])

  return (
    <div className="notes-list-wrapper"> 
      <div className="notes-list-title">
        <div>
          <div className="subtitle-delete-tag-wrapper">
            <h2 className="subtitle-category-name">{categorySubtitle}</h2>
            {isHasTag !== undefined ? 
            <button className="delete-tag-btn" onClick={() => deleteTag(isHasTag.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 10.5L12.5 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V12.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10L14 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M14 10L10 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
            </svg>
          </button> : null}
          </div>
          <h5 className="notes-subtitle-counter">
            Заметок: {filteredNotes.length} 
          </h5>
        </div>
      </div>
      <hr className="notes-list-hr"/>
      <div className="select-sort-wrapper">
        <select 
          className="select-sort"
          value={filters.sort}
          onChange={(e) => {
            console.log(filters)
            setFilters(prev => {
              return {...prev,
                sort: e.target.value}              
              })
          }}>
          <option value="updated">Последние изменения</option>
          <option value="favorites">Сначала избранные</option>
          <option value="created">По дате создания</option>
        </select>
      </div>
      <ul 
        className ="notes-list-group">
        {filteredNotes.length > 0 ? filteredNotes.map(note => (
          <NoteItem 
            note={note}
            key={note.id + note.createdAt}
            deleteNote={deleteNote}
            toggleFavorite={toggleFavorite}
            setFilters={setFilters}
            restoreNote={restoreNote}
            setEditingId={setEditingId}
            allTags={allTags}
            />))
             : 
             <h2 className="category-empty-title">{`Пока в разделе «${categorySubtitle}» нет заметок`}</h2>}
      </ul>
    </div>
  )
}

export default NotesList
