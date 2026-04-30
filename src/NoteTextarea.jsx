import {useRef, useEffect} from "react";

function NoteTextarea(props) {
  const textareaRef = useRef(null);
  const {
    textContent,
    setTextContent
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
    setTextContent(e.target.value);
  };

  return (
    <textarea
      ref={textareaRef}
      onChange={handleChange}
      placeholder="Начни писать свою заметку..."
      className="new-note-main-section"
      value={textContent}
      
    />
  );
}

export default NoteTextarea;