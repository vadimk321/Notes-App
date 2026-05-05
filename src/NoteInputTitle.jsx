import {} from "react";

function NoteInputTitle(props) {

  const {
  } = props

  function handleChange(e) {
  }

  return (
    <input 
        type="text" 
        placeholder="Заголовок заметки..." 
        className="new-note-input"
        onChange={handleChange}
      />
  );
}

export default NoteInputTitle;