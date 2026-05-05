import {} from "react";

function NoteInputTitle(props) {

  const {
    value,
    onChange
  } = props

  return (
    <input
        value={value}
        type="text" 
        placeholder="Заголовок заметки..." 
        className="new-note-input"
        onChange={(e) => onChange(e.target.value)}
      />
  );
}

export default NoteInputTitle;