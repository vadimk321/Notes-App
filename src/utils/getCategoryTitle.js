export function getCategoryTitle(category, allTags) {
  if (category === 'all') return 'Все заметки';
  if (category === 'favorites') return 'Избранные';
  if (category === 'deleted') return 'Корзина';

  const tag = allTags.find(tag => tag.id === category);

  return tag ? tag.text : '';
}