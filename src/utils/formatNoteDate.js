export function formatNoteDate(noteCreatedAt) {
  
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  
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
  

  // Разница в днях
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

  return formattedDate

 }
 