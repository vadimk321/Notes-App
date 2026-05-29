import { useState, useEffect } from 'react'
import ListCategories from './ListCategories.jsx'
import TagSideBar from './TagSideBar.jsx'
import logo from './assets/Logo.png'

function Sidebar(props) {

  const {
    filters,
    setFilters,
    notesCountAll,
    notesCountDeleted,
    notesCountFavorite,
    setEditingId,
    notes,
    setNotes,
    exitEditor,
    allTags
  } = props

  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    setSearchValue(filters.search);
  }, [filters.search]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilters(prev => ({
        ...prev,
        search: searchValue
      }));
    }, 300)

    return () => clearTimeout(timeout);
  }, [searchValue]);
  

  return (
    <div className="sidebar-wrapper">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" className="logo-img"/>
        <h2 className="logo-title">NotesApp</h2>
      </div>
      <div className="input-wrapper">
        <input type="text" 
          placeholder="Поиск заметок..." 
          className="sidebar-input-search" 
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}/>
      </div>
      <button 
        className="sidebar-button" 
        onClick={() => {
          const newNote = {
            id: crypto.randomUUID(),
            
            title: "",
            content: "",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            tags: [],
            isFavorite: false,
            isDeleted: false,
          };

          setFilters(prev => ({
            ...prev,
            category: ''
          }))
          setNotes(prev => [...prev, newNote]);
          setEditingId(newNote.id);
        }}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAaUlEQVR4AexSWwoAIAir7n/n+nEwyFgggYH+KDnaA0d7XEUgA84V0bSSsgmQywEJux7LgYzKjciOZWv4bVvYA/bcXQIGRGeXoB8KZId1x567S8CA6FwEMsFcEeF6pGwC5HJAwq7H/x0sAAAA//9XuclYAAAABklEQVQDABpEODG4FEVIAAAAAElFTkSuQmCC"/>
        <span className="sidebar-button-text">Новая заметка</span>
      </button>
      <ListCategories
        notesCountAll={notesCountAll}
        notesCountDeleted={notesCountDeleted}
        notesCountFavorite={notesCountFavorite}
        setFilters={setFilters}
        filters={filters}
        setEditingId={setEditingId}
        exitEditor={exitEditor}
        />
      <h4 className="list-tags-title">ТЕГИ</h4>
      <ul className="list-tags">
        {allTags ? allTags.map((tag) => 
          <TagSideBar
            tag={tag}
            key={tag.id}
            filters={filters}
            exitEditor={exitEditor}
            counterTag={notes.filter(note => note.tags?.includes(tag.id) && !note.isDeleted).length}
            />) : null}
      </ul>

    </div>
  )
}

export default Sidebar
