// import { useState } from 'react'

function ListCategories(props) {
  
  const {
    setIsEdding,
    notesCount
  } = props

  return (
    <div className="list-сategories-wrapper">
      <ul className="list-сategories-list">
        <button 
          onClick={() => setIsEdding(() => false)}
          className='list-categories-btn'
        >
          <li className="list-сategories-item" >
            {/* <div className="list-item-wrapper"> */}
              <img src="" alt="" />
              <span>Все заметки</span>
              <span>{notesCount}</span>
            {/* </div> */}
          </li>
        </button>
        <li className="list-сategories-item">
          <div className="list-item-wrapper">
            <img src="" alt="" />
            <span>Избранные</span>
            <span></span>
          </div>
        </li>
        <li className="list-сategories-item">
          <div className="list-item-wrapper">
            <img src="" alt="" />
            <span>Корзина</span>
            <span></span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ListCategories
