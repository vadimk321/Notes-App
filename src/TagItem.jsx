function TagItem(props) {

  const {
          tag,
          onClick,
          isSelected
        } = props
  

  return (
    <button className={`tag-item-add-btn ${tag.color} ${isSelected ? 'active' : ''}`} onClick={onClick}>
      <span className={`tag-dot ${tag.color}`}></span>
      {tag.text}
      </button>
  );
}

export default TagItem;