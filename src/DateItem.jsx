function DateItem(props) {

  const {noteCreatedAt} = props

  const months = {
    0: 'января',
    1: 'февраля',
    2: 'марта',
    3: 'апреля',
    4: 'мая',
    5: 'июня',
    6: 'июля',
    7: 'августа',
    8: 'сентября',
    9: 'октября',
    10: 'ноября',
    11: 'декабря',
};
  
  let formattedDate = '';
  const now = new Date();
  const noteCreatedDate = new Date(noteCreatedAt);

  // Начало сегодняшнего дня
  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  // Начало дня созданной заметки
  const noteCreatedDay = new Date(
    noteCreatedDate.getFullYear(),
    noteCreatedDate.getMonth(),
    noteCreatedDate.getDate()
  );
  

  // Сколько секунд прошло с момента создания заметки до сегодняшнего дня 00:00
  const different = Math.floor((today - noteCreatedDay) / (1000 * 60 * 60 * 24));
  

  if (different === 0) {

    if (noteCreatedDate.getMinutes() < 10) { // Пишется время в формате 14:55
      const minutes = `0${noteCreatedDate.getMinutes()}`;
      formattedDate = `${noteCreatedDate.getHours()}:${minutes}` 
    }
    else {
      formattedDate = `${noteCreatedDate.getHours()}:${noteCreatedDate.getMinutes()}` 
    }
    
  }
  else if (different === 1) {
    formattedDate = 'Вчера'
  }
  else if (different > 1 && noteCreatedDate.getFullYear() === now.getFullYear()) {
    formattedDate = `${noteCreatedDate.getDate()} ${months[noteCreatedDate.getMonth()]}` 
    // Пишется дата в формате 15 мая, если дата создания в этом году
  }
  else {
    formattedDate = noteCreatedDate.toLocaleDateString('ru-RU');
    // Пишется дата в формате 15.05.2025, если заметка была создана не в текущий год
  }

  return (
    <span className="note-date">{formattedDate}</span>
  );
}

export default DateItem;