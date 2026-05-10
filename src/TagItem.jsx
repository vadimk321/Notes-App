function TagItem(props) {

  const {
          tag
        } = props
  

  return (
    <button className={`tag-item-add-btn ${tag.color}`}>
      <span className={`tag-dot ${tag.color}`}></span>
      {tag.text}
      </button>
  );
}

export default TagItem;