// import { useState } from 'react'

function TagSideBar(props) {
  
  const {
          tag,
          counterTag
        } = props

  return (
      <li className="list-tags-item">
          <div>
            <span className={`tag-dot big ${tag.color}`}></span>
            <span>{tag.text}</span>
          </div>
          {counterTag > 0 ? <span>{counterTag}</span> : null}
      </li>
  )
}

export default TagSideBar
