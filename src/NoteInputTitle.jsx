import {} from "react";

function NoteInputTitle(props) {

  const {
    textTitle,
    setTextTitle
  } = props

  function handleChange(e) {
    setTextTitle(e.target.value);
  }

  return (
    <input 
        type="text" 
        placeholder="Заголовок заметки..." 
        className="new-note-input"
        value={textTitle}
        onChange={handleChange}
      />
  );
}

export default NoteInputTitle;