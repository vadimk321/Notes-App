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

  const [selectedColor, setSelectedColor] = useState(null);
  const [isTagPopupOpen, setIsTagPopupOpen] = useState(false);

  const colors = [
  "purple",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
  "pink",
  "bright-blue"
];

// Если не выбран цвет, то он выбирается случайно из пула colors
const randomColor = colors[Math.floor(Math.random() * colors.length)];

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
          <button 
            className="tag-add-btn"
            onClick={() => setIsTagPopupOpen(prev => !prev)}>+ Добавить тег</button>
        </ul>
        {isTagPopupOpen ? 
        <div className="tag-popup">
          <div className="tag-popup-title-wrapper">
            <h4 className="tag-popup-title">Новый тег</h4>
            {/* <img src="" alt="" />  */}
          </div>

          <div className="tag-popup-input-wrapper">
            <p className="tag-popup-subtite">Название тега</p>
            <input type="text" />
          </div>

          <p className="tag-popup-color-text">Цвет</p>

          <div className="tag-popup-colors-wrapper">
            <button className={`tag-popup-color-btn purple ${selectedColor === 'purple' ? 'active' : ''}`} onClick={() => setSelectedColor('purple')}></button>
            <button className={`tag-popup-color-btn blue ${selectedColor === 'blue' ? 'active' : ''}`} onClick={() => setSelectedColor('blue')}></button>
            <button className={`tag-popup-color-btn green ${selectedColor === 'green' ? 'active' : ''}`} onClick={() => setSelectedColor('green')}></button>
            <button className={`tag-popup-color-btn yellow ${selectedColor === 'yellow' ? 'active' : ''}`} onClick={() => setSelectedColor('yellow')}></button>
            <button className={`tag-popup-color-btn orange ${selectedColor === 'orange' ? 'active' : ''}`} onClick={() => setSelectedColor('orange')}></button>
            <button className={`tag-popup-color-btn red ${selectedColor === 'red' ? 'active' : ''}`} onClick={() => setSelectedColor('red')}></button>
            <button className={`tag-popup-color-btn pink ${selectedColor === 'pink' ? 'active' : ''}`} onClick={() => setSelectedColor('pink')}></button>
            <button className={`tag-popup-color-btn bright-blue ${selectedColor === 'bright-blue' ? 'active' : ''}`} onClick={() => setSelectedColor('bright-blue')}></button>
          </div>

          <div className="tag-popup-btn-group">
          <button>Отмена</button>
          <button>Создать</button>
          </div>
        </div>  
        : null}
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
