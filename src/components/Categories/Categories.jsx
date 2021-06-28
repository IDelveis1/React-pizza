import React, { useState } from 'react';


const Categories = ({ items }) => {

    let [activeMode, setActiveMode] = useState(null)

    return(
        <div class="categories">
              <ul>
                <li className={ activeMode === null ? 'active' : '' } onClick={() => setActiveMode(null)}>Все</li>
                {
                    items &&
                    items.map((name, index) => {
                        return <li className={ activeMode === index ? 'active' : '' } onClick={() => setActiveMode(index)} key={`${name}_${index}`}>{name}</li>
                    } )

                }
              </ul>
            </div>
    )
}

export default Categories;