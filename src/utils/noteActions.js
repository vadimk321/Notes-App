export function deleteNote(notes, id) {
    return notes.map(note =>
      note.id === id
        ? { ...note, isDeleted: true,   isFavorite: false }
        : note
    );
}

export function restoreNote(notes, id) {
    return notes.map(note => note.id === id 
      ? {
        ...note,
        isDeleted: false, 
        isFavorite: false} 
      : note);
}

export function toggleFavorite(notes, id) {
    return notes.map(note =>
      note.id === id
        ? { ...note, isFavorite: !note.isFavorite }
        : note
    )
};

export function toggleTag(notes, idTag, idNote) {
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

export function removeTagFromNotes(notes, tagId) {
    return notes.map(note => ({
      ...note,
      tags: note.tags.filter(tag => tag !== tagId)
    }));
  }