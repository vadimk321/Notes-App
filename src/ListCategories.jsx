// import { useState } from 'react'

function ListCategories() {
  

  return (
    <div className="list-сategories-wrapper">
      <ul className="list-сategories-list">
        <li className="list-сategories-item">
          <div className="list-item-wrapper">
            <img src="" alt="" />
            <span>Все заметки</span>
            <span></span>
          </div>
        </li>
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
