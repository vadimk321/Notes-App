export function deleteNoteAction(notes, id) {
    return notes.map(note =>
      note.id === id
        ? { ...note, isDeleted: true,   isFavorite: false }
        : note
    );
}

export function restoreNoteAction(notes, id) {
    return notes.map(note => note.id === id 
      ? {
        ...note,
        isDeleted: false, 
        isFavorite: false} 
      : note);
}

export function toggleFavoriteAction(notes, id) {
    return notes.map(note =>
      note.id === id
        ? { ...note, isFavorite: !note.isFavorite }
        : note
    )
};

export function toggleTagAction(notes, idTag, idNote) {
    const resultNote = notes.find(note => note.id === idNote); 
    const isHasTag = resultNote.tags.includes(idTag);

    return !isHasTag ?
      notes.map(note => 
        note.id === idNote ? { 
          ...note, 
          tags: [...note.tags, idTag]
        } : note
      ) : 
      notes.map(note => {
        if (note.id === idNote) {
          return { 
            ...note, 
            tags: note.tags.filter(tag => tag !== idTag)
          }}
        else {
          return note
        }
      })
};

export function removeTagFromNotesAction(notes, tagId) {
    return notes.map(note => ({
      ...note,
      tags: note.tags.filter(tag => tag !== tagId)
    }));
  }