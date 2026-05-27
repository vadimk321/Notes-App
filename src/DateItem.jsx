import { formatNoteDate } from "./utils/formatNoteDate";

function DateItem({noteCreatedAt}) {

  return (
    <span className="note-date">{formatNoteDate(noteCreatedAt)}</span>
  );
}

export default DateItem;