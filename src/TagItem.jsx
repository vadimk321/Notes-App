function TagItem(props) {

  const {
          tag
        } = props
  
  return (
    <button>{tag.text}</button>
  );
}

export default TagItem;