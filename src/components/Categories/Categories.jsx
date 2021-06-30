import React, { useState } from 'react';


const Categories = ({ items, onSelectItems }) => {

    let [activeMode, setActiveMode] = useState(null)

    const onActiveItem = (index) => {
        setActiveMode(index)
        onSelectItems(index)

    }

    return(
        <div class="categories">
              <ul>
                <li className={ activeMode === null ? 'active' : '' } onClick={() => setActiveMode(null)}>Все</li>
                {
                    items &&
                    items.map((name, index) => {
                        return <li className={ activeMode === index ? 'active' : '' } onClick={() => onActiveItem(index)} key={`${name}_${index}`}>{name}</li>
                    } )

                }
              </ul>
            </div>
    )
}

export default Categories;