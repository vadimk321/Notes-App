import {} from "react";

function NoteInputTitle(props) {

  const {
    textTitle,
    setTextTitle
  } = props


  const handleChange = (e) => {
    setTextTitle(e.target.value);
  };

  return (
    <input 
        type="text" 
        placeholder="Заголовок заметки..." 
        className="new-note-input"
        value={textTitle}
        onChange={handleChange}
        disabled={textTitle.length > 60}
      />
  );
}

export default NoteInputTitle;