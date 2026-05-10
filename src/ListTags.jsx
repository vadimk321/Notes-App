// import { useState } from 'react'

function ListTags(props) {
  
  const {
          tag
        } = props

  return (
      <li className="list-tags-item">
        {/* <div className="list-item-wrapper"> */}
          <div>
            <span className={`tag-dot big ${tag.color}`}></span>
            <span>{tag.text}</span>
          </div>
          <span>0</span>
        {/* </div> */}
      </li>
  )
}

export default ListTags
