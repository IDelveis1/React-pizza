import React, { useEffect, useRef, useState } from 'react';

const SortPopup = ({ items, sortType, onSelectSortType }) => {
const [visiblePopup, setVisiblePopup] = useState(false)
const ActiveLabel = items.find((obj) => obj.sortType === sortType).name
const sortRef = useRef()
const toogleVisiblePopup = () => {
  setVisiblePopup(!visiblePopup)
}
const handleOutsideClick = ((e) => {
  if (!e.path.includes(sortRef.current)) {
    setVisiblePopup(false)
  }
})

const handleActiveItem = (sortType, order) => {
  onSelectSortType(sortType, order);
  setVisiblePopup(false)
}

useEffect(() => { 
  document.body.addEventListener('click', handleOutsideClick)
}, [])

    return (
        <div ref={sortRef} class="sort">
              <div class="sort__label">
                <svg
                className={ visiblePopup ? 'rotated' : '' }
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                  />
                </svg >
                <b>Сортировка по:</b>
                <span onClick={toogleVisiblePopup}>{ ActiveLabel }</span>
              </div>
              { visiblePopup && <div class="sort__popup">
                <ul>
                {
                    items &&
                    items.map((obj, index) => {
                        return <li className={ sortType === obj.sortType ? 'active' : '' } onClick={() => handleActiveItem(obj.sortType, obj.order)} key={`${obj.type}_${index}`}>{obj.name}</li>
                    } )

                }
                </ul>
              </div>}
            </div>
    );
};

export default SortPopup;