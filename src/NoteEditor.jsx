import { useState, useRef, useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import EditorToolbar from './EditorToolbar.jsx'

import NoteInputTitle from './NoteInputTitle.jsx'
import TagItem from './TagItem.jsx'
import AddTagPopup from './AddTagPopup.jsx'
import StarIcon from './icons/StarIcon.jsx'


function NoteEditor(props) {

  

  const {
          note,
          setNotes, 
          exitEditor,
          allTags,
          setAllTags,
          toggleTag,
          toggleFavorite
        } = props

  const [selectedColor, setSelectedColor] = useState('grey');
  const [isTagPopupOpen, setIsTagPopupOpen] = useState(false);
 
  const editor = useEditor({
    extensions: [
      StarterKit,

      Placeholder.configure({
        placeholder: "Начни писать свою заметку...",
      }),

      TaskList,

      TaskItem.configure({
        nested: true,
      }),
    ],

    content: note.content || '',

    onUpdate: ({ editor }) => {
      handleChange(
        'content',
        editor.getHTML()
      );
    },
  });

  useEffect(() => {
    if (
      editor &&
      note.content !== editor.getHTML()
    ) {
      editor.commands.setContent(
        note.content || ''
      );
    }
  }, [note.id, editor]);

  // Для фикса закрытия PopUp при клике вне окна на кнопку "добавить тег"
  const buttonRef = useRef(null);

  function handleToggleTag(tagId, noteId) {
    setNotes(prev => toggleTag(prev, tagId, noteId))
  }

  function handlerToggleFavorite(noteId) {
    setNotes(prev => toggleFavorite(prev, noteId));
  }

  function handleChange(field, value) {
    setNotes(prev =>
      prev.map(item =>
        item.id === note.id
        ? {
          ...item,
          [field]: value,
          updatedAt: new Date().toISOString(),
        } : item
      )
    )
  }

  
  return (
    <div className="new-note-wrapper">
      <div className="new-note-title-wrapper">
        <img 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABS0lEQVR4AcyU0W3CMBCG78gEpWqivtFJWjbpJqWTtJuUTcgbSqSWCRrj3+GQ7fggcYRElMPmjL8PO84t6MbX/Qv2+8OqaX4/EKnNmLUCwIvCfBHzBtG0fzvkfFG2ACDADdEbEdXUx2pRmB/bP99ZghhelcuX7p/XlgqR2zLbd/dkQQR3EOTQ4X4V6J5jkgAgbVv8fFU9fophtCCGx9sizwJ5gaMdJUjBMRnhbUsdwzF+VaDBtTygflwUaBAt74Olrwo0iJYXYNwmBRpEy8dQ//tAoEG0vA9L9QeC4DzbNxSTcuGYOxCczjPJkZsDHwja9vCOJJH5RjsXDkawAkPdK5JM7AqWrYw7c6qWsiKMT4lAQMQoveSgqPHkruQb6kZGfAQC7qthbdstGbPpmNe5/1zcgaAslw7oWlsRn58etvLD3DYQ5EIuzbu54AgAAP//yjmolQAAAAZJREFUAwB5r9Yx9M38hgAAAABJRU5ErkJggg==" className="new-note-title-img"/>
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
          {allTags ? allTags.map((tag) => 
          <TagItem 
            tag={tag}
            key={tag.id}
            onClick={() => handleToggleTag(tag.id, note.id)}
            isSelected={note.tags.includes(tag.id)}
          />) : null}
          <button 
            className="tag-add-btn"
            onClick={() => setIsTagPopupOpen(prev => !prev)}
            ref={buttonRef}
            >
              + Добавить тег
            </button>
        </ul>
        {isTagPopupOpen 
          ? <AddTagPopup 
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            setIsTagPopupOpen={setIsTagPopupOpen}
            buttonRef={buttonRef}
            allTags={allTags}
            setAllTags={setAllTags}
            note={note}
            setNotes={setNotes}
          />
          : null}
      </div>
      <EditorToolbar editor={editor}/>
      <div className="editor-wrapper">
        <EditorContent editor={editor} />
      </div>
      
      <div className="new-note-status-wrapper"> 
        <button
          onClick={() => {handlerToggleFavorite(note.id);}}
          className="note-editor-star-btn">
          <StarIcon  
            filled={note.isFavorite}
            size={"50px"}/>
        </button>
        <button 
          className="new-note-btn-add"
          onClick={() => exitEditor('all')}
        >Готово</button>
      </div>
    </div>
  )
}

export default NoteEditor
