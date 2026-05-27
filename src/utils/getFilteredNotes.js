import { stripHtml } from './stripHtml.js';

export function getFilteredNotes(notes, filters, isHasTag) {
  let result = [...notes];

    
    // Категория || Теги
    if (filters.category === 'all') {
      result = result.filter(note => !note.isDeleted);
    }

    if (filters.category === 'favorites') {
      result = result.filter(note => note.isFavorite);
    }

    if (filters.category === 'deleted') {
      result = result.filter(note => note.isDeleted);
    }

    if (isHasTag !== undefined) {
      result = (result.filter(note => note.tags.includes(filters.category)).filter(note => !note.isDeleted));
    }

    // Поиск
    if (filters.search.trim()) {
      const query = filters.search.toLowerCase();
    
      result = result.filter(note => {
        const plainText = stripHtml(note.content).toLowerCase()
        return note.title.toLowerCase().includes(query) || plainText.includes(query)
      }
        
      );
    }


    // Сортировка Select

    // Последние изменения
    if (filters.sort === 'updated') {
      result = result.sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      })
    } 
    // Сначала избранные
    if (filters.sort === 'favorites') {
      result = result.sort((a, b) => {
        if (b.isFavorite !== a.isFavorite) {
          return b.isFavorite - a.isFavorite;
        }

        return new Date(b.updatedAt) - new Date(a.updatedAt);
      })
    }
    // По дате создания
    if (filters.sort === 'created') {
       result = result.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      })
    }

    return result
}