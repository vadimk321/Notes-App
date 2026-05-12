// import { useState } from 'react'

function TagSideBar(props) {
  
  const {
          tag,
          counterTag,
          exitEditor,
          filters
        } = props

  return (
      <li className={`list-tags-item ${filters.category === tag.id ? 'active' : ''}`} onClick={() => exitEditor(tag.id)}>
          <div>
            <span className={`tag-dot big ${tag.color}`}></span>
            <span>{tag.text}</span>
          </div>
          {counterTag > 0 ? <span className="category-counter">{counterTag}</span> : null}
      </li>
  )
}

export default TagSideBar
