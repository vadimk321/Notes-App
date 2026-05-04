// import { useState } from 'react'

function ListCategories(props) {
  
  const {
    setIsEdding,
    notesCountAll,
    notesCountDeleted,
    notesCountFavorite,
    setTextTitle,
    setTextContent,
    setFilters
  } = props


  function setCategory(category){
    setFilters(prev => {
      return {...prev, category: category}
    })
  }

  return (
    <div className="list-сategories-wrapper">
      <ul className="list-сategories-list">
        <li className="list-сategories-item" onClick={() => {
          setCategory('all');
          setIsEdding(false);
          setTextTitle('');
          setTextContent('');
        }}>
            <div className="category-name">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA/UlEQVR4AeyVUQ6CMAyGO/UgeBN8kBvIk5zFeBIeMDHBA5jgg9xEDyKZ/RdGGBlCqryoy5qGlv4fKSvMaOL1ZYDsdAkPeXHL8kJLzNSyRrvrbou03mmigIQLtUrrtF3uAohC4pXEkZIYlxIg8Na6ABv/mP8DBlv5gy3iAbyyeQfR1y9Ji8ys+MTqWFl74yQAU2gH8VFVSw4YUUV05/iKr5stBkAhPZ6DxXyOT0MI8W0cAYZUY2LAGHFQxIChJ4c4TAzg4t62cK7ZXYB5WX3HEHFb2ddzm7feBSi154SBsO/dY8Uh4ACSzbrEMWN7+T/wnRaI+cwB+G54NzY54AkAAP//Nkrh0gAAAAZJREFUAwDoPp8xLFtczAAAAABJRU5ErkJggg=="/>
              <span>Все заметки</span>
            </div>
            <span className="category-counter">{notesCountAll}</span>
        </li>
        <li className="list-сategories-item" onClick={() => {
          setCategory('favorites');
          setIsEdding(false);
          setTextTitle('');
          setTextContent('');
        }}>
            <div className="category-name">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACSklEQVR4AcxUUW7TQBB9S+AezklqfxCJAxAJiUJyktgncUqRkMIBkMJHzUniexBj3hvba9dZN0aiUq0de3Zm9r2Z3Vm/wjM/L4vg/nB8+Ho45v9S9OwKvhyOGwLHNbC5//4zpj5rzCZwwGePWNc7r19RZhG0GQ+zjlvbFXhgFgG6jJ1LIRFsZ5P+hFwlyL/9iLjesj+fz3cSzuGAaE4VnkBAXLBTl6hbJNRPrxeLUwu43354V0oIvudhR66uc8UoVkJd81xYWiPxBATKuRUpF1q30KmOUfbKtvxdVRltNqSTpGRsJKFRFSp+w/nmzWLxQJsNTwDnCrM0r4Lz5FxVy9v1yn1cr5bKvHEB0mWTX6JY+gqKjT+AT8YT3L5/m6E7QCAGcCMgfieH/BJWrrbVGhAj+bRe7dE+nkBzkbDErXQuSnUmpj/x0t7THTugFDgxfCXg84iAc4h9RNJkJudIhuC1c9sxuMIvCGQUCTOyMtkp/Q2WMyBT4AoNEsjBKiJ9eWC/9A0Jkyhb+037vfhMEjDStqaqKttT9ba2hL1+4tmYj5nfMQ48L5ubPnoFCdo/p4WqSwi44z3RhVOv2wWTjbfaKmAlVq0tGL2CBIOYQhkzw9RsamOKbV9dp7pQBLcLR8JgFUECGrs9bTLuWzBjp2S6XB2wkZF9qhmIRe/l6LNhxrq1BLazUKi2jb+LhH3fVCYj0K9B/0wRFMqQAAmBsz6810Qin6qhVeQSqo9HkIAZbylLAgQXDSGMaL1KGN/8AYZO6kEC2v/b+AsAAP//HXU9NAAAAAZJREFUAwAX8Q1ADNgicgAAAABJRU5ErkJggg=="/>
              <span>Избранные</span>
            </div>
            {notesCountFavorite
            ? <span className="category-counter">{notesCountFavorite}</span>
            : null}
        </li>
        <li className="list-сategories-item" onClick={() => {
          setIsEdding(false);
          setTextTitle('');
          setTextContent('');
        }}>
            <div className="category-name">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA8UlEQVR4AexVSw6CQAzteBK9CS7kBrKSsxhP4gJXeAPccBO9ydhiSjK1ZboY44ZmmtLXz4OXTNjAj+2/BN39Ud364dn1Q9R8qmHPkgjLXxDjOQJswTCqhRivRnmClwkAKkBrmzpojiUgEoqW5wisOTeeEEideYvEObfqjFNMCAgo7QkB68wknOei7OecYkJAQGl3EViae17GReBZZPWsBJYyM75KNEthPbgk4pvMS2TOuBZdBNqgF7MIRlrANzgXqRd9msGYHJ0ghAt2qQOIf50A8ILPDEhTCdrjYUSd9+jqn0zip6be0YxcTrlKQIVS/gYAAP//cax+KgAAAAZJREFUAwA2jKUxCaNmYQAAAABJRU5ErkJggg=="/>
              <span>Корзина</span>
            </div>
            {notesCountDeleted 
            ? <span className="category-counter">{notesCountDeleted}</span> 
            : null}
        </li>
      </ul>
    </div>
  )
}

export default ListCategories
