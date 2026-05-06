import {useRef, useEffect} from "react";

function NoteTextarea(props) {
  const textareaRef = useRef(null);
  const {
    value,
    onChange
  } = props

  

  // авто-подгон при первом рендере, пока не используется, но если при редактировании заметки будет исп. этот же компонент - понадобится.
  useEffect(() => {
    if (textareaRef.current) {
      autoResize(textareaRef.current);
    }
  }, []);

  const autoResize = (element) => {
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
  };

  const handleChange = (e) => {
    const el = e.target;
    autoResize(el);
  };

  return (
    <textarea
      ref={textareaRef}
      onChange={(e) => {
        onChange(e.target.value);
        handleChange(e);
      }}
      placeholder="Начни писать свою заметку..."
      className="new-note-main-section"
      value={value}
      
    />
  );
}

export default NoteTextarea;