function DateItem(props) {

  const {
          noteCreatedAt

        } = props

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
  
  const now = new Date();

  // Начало дня
  const startOfDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  const noteCreatedDate = new Date(noteCreatedAt);

  // Сколько секунд прошло с момента создания заметки до сегодняшнего дня 00:00
  const diffSecond = Math.floor((startOfDay - new Date(noteCreatedAt)) / 1000);
  let formattedDate = ''

  if (diffSecond < 86400) {

    if (noteCreatedDate.getMinutes() < 10) { // Пишется время в формате 14:55
      const minutes = `0${noteCreatedDate.getMinutes()}`;
      formattedDate = `${noteCreatedDate.getHours()}:${minutes}` 
    }
    else {
      formattedDate = `${noteCreatedDate.getHours()}:${noteCreatedDate.getMinutes()}` 
    }
    
  }
  else if (diffSecond >= 86400 && diffSecond < 172800) {
    formattedDate = 'Вчера'
  }
  else if (diffSecond >= 172800 && noteCreatedDate.getFullYear() === now.getFullYear()) {
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