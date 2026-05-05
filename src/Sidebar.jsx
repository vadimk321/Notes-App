// import { useState } from 'react'
import ListCategories from './ListCategories.jsx'
import ListTags from './ListTags.jsx'
import logo from './assets/Logo.png'

function Sidebar(props) {

  const {
    // setIsEdding,
    // setTextContent,
    // setTextTitle,
    filters,
    setFilters,
    notesCountAll,
    notesCountDeleted,
    notesCountFavorite,
    setEditingId
  } = props

  return (
    <div className="sidebar-wrapper">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" className="logo-img"/>
        <h2 className="logo-title">NotesApp</h2>
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="Поиск заметок..." className="sidebar-input-search" />
      </div>
      <button 
        className="sidebar-button" 
        onClick={() => {
          const newNote = {
            id: new Date().toISOString(),
            
            title: "",
            content: "",
            createdAt: Date.now(),
            updatedAt: Date.now(),
            tags: [],
            isPinned: false,
            isFavorite: false,
            isDeleted: false,
          };

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
        // setIsEdding={setIsEdding}
        // setTextContent={setTextContent}
        // setTextTitle={setTextTitle}
        setFilters={setFilters}
        filters={filters}
        />
      <ListTags/>
      

    </div>
  )
}

export default Sidebar
