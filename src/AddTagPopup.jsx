import { useState, useEffect, useRef} from "react";

function AddTagPopup(props) {

  const {
    selectedColor,
    setSelectedColor,
    setIsTagPopupOpen,
    buttonRef,
    setAllTags,
    allTags,
    note,
    setNotes
  } = props

  const popupRef = useRef(null);
  const [addTagInput, setAddTagInput] = useState('');

  // Клик вне окна добавления тега, закрывает его
  useEffect(() => {

    function handleClickOutside(event) {

      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsTagPopupOpen(false);
        setSelectedColor('grey');
      }

    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  function handleAddTag() {

    let isHasDouble = allTags.find(tag => tag.text === addTagInput);
    console.log(isHasDouble)
    if (isHasDouble === undefined) {
      const result = {
        id: crypto.randomUUID(),
        text: addTagInput,
        color: selectedColor
      }

      setAllTags(prev => ([...prev, result]));
      setIsTagPopupOpen(prev => !prev);
      setSelectedColor('grey');
    }

    else if (isHasDouble !== undefined) {
      setNotes(prev => prev.map(item => item.id === note.id 
        ? ({
          ...note, 
          tags: [...note.tags, isHasDouble.id]}) 
          : item))
      setIsTagPopupOpen(prev => !prev);
      setSelectedColor('grey');
    }
  }


  return (
    <div className="tag-popup" ref={popupRef}>
          <div className="tag-popup-title-wrapper">
            <h4 className="tag-popup-title">Новый тег</h4>
            {/* <img src="" alt="" />  */}
          </div>

          <div className="tag-popup-input-wrapper">
            <p className="tag-popup-subtite">Название тега</p>
            <input 
              type="text" 
              value={addTagInput}
              onChange={(e) => setAddTagInput(e.target.value)}
              className={`${addTagInput.length >= 10 ? 'add-tag-input-blocked' : null}`}
              />
              
          </div>
          <p className="tag-popup-color-text">Цвет</p>
          <div className="tag-popup-colors-wrapper">
            <button className={`tag-popup-color-btn purple ${selectedColor === 'purple' ? 'active' : ''}`} onClick={() => setSelectedColor('purple')}></button>
            <button className={`tag-popup-color-btn blue ${selectedColor === 'blue' ? 'active' : ''}`} onClick={() => setSelectedColor('blue')}></button>
            <button className={`tag-popup-color-btn green ${selectedColor === 'green' ? 'active' : ''}`} onClick={() => setSelectedColor('green')}></button>
            <button className={`tag-popup-color-btn yellow ${selectedColor === 'yellow' ? 'active' : ''}`} onClick={() => setSelectedColor('yellow')}></button>
            <button className={`tag-popup-color-btn orange ${selectedColor === 'orange' ? 'active' : ''}`} onClick={() => setSelectedColor('orange')}></button>
            <button className={`tag-popup-color-btn red ${selectedColor === 'red' ? 'active' : ''}`} onClick={() => setSelectedColor('red')}></button>
            <button className={`tag-popup-color-btn pink ${selectedColor === 'pink' ? 'active' : ''}`} onClick={() => setSelectedColor('pink')}></button>
            <button className={`tag-popup-color-btn bright-blue ${selectedColor === 'bright-blue' ? 'active' : ''}`} onClick={() => setSelectedColor('bright-blue')}></button>
          </div>

          <div className="tag-popup-btn-group">
          <button 
            onClick={() => {
              setSelectedColor('grey');
              setIsTagPopupOpen(false);
              setAddTagInput('')}}>
            Отмена</button>
          <button onClick={() => handleAddTag()} disabled={addTagInput.length >= 10}>Создать</button>
          </div>
        </div>  
  );
}

export default AddTagPopup;