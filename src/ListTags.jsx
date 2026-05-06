// import { useState } from 'react'

function ListTags(props) {
  
  const {
          tag
        } = props

  return (
    <div className="list-tags-wrapper">
      <button>
        <li className="list-tags-item">
        <div className="list-item-wrapper">
          <span>{tag}</span>
          <span></span>
        </div>
      </li>
      </button>
    </div>
  )
}

export default ListTags
