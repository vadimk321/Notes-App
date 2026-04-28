// import { useState } from 'react'

function ListTags() {
  

  return (
    <div className="list-tags-wrapper">
      <h4 className="list-tags-title">ТЕГИ</h4>
      <ul className="list-tags-list">
        <li className="list-tags-item">
          <div className="list-item-wrapper">
            <img src="" alt="" />
            <span>Работа</span>
            <span></span>
          </div>
        </li>
        <li className="list-tags-item">
          <div className="list-item-wrapper">
            <img src="" alt="" />
            <span>Сегодня</span>
            <span></span>
          </div>
        </li>
        <li className="list-tags-item">
          <div className="list-item-wrapper">
            <button>
              <img src="" alt="" />
              <span>Новый тег</span>   
            </button>
          </div>
        </li>
        
      </ul>
    </div>
  )
}

export default ListTags
