import React, { useState } from 'react';


const Categories = ({ items, onSelectItems, categories }) => {


    return(
        <div class="categories">
              <ul>
                <li className={ categories === null ? 'active' : '' } onClick={() => onSelectItems(null)}>Все</li>
                {
                    items &&
                    items.map((name, index) => {
                        return <li className={ categories === index ? 'active' : '' } onClick={() => onSelectItems(index)} key={`${name}_${index}`}>{name}</li>
                    } )

                }
              </ul>
            </div>
    )
}

export default Categories;