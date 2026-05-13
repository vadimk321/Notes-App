function TagNoteItem(props) {

  const {
          tag
        } = props
  
  

  return (
    <span className={`note-tag-item ${tag.color}`}>{tag.text}</span>
  );
}

export default TagNoteItem;