import React from 'react';
import Categories from '../../../components/Categories/Categories';
import PizzaBlock from '../../../components/PizzaBlock/PizzaBlock';
import SortPopup from '../../../components/SortPopup/SortPopup';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../../redux/filter-reducer';
import { useCallback } from 'react';
import PizzaLoader from '../../../components/PizzaLoader/PizzaLoader';

const items = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

const Home = () => {

  const dispatch = useDispatch()

  const onSelectItems = useCallback((index) => {
    dispatch(setCategory(index))
    console.log(index)
  })

  const pizzas = useSelector(({ pizzas }) => pizzas.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)

    return (
        <div class="container">
        <div class="content__top">
          <Categories onSelectItems={onSelectItems}  items={items}/>
          <SortPopup items={[
            {name: 'популярности', type: 'popular'},
            {name: 'цене', type: 'price'},
            {name: 'алфавиту', type: 'alphabet'},
          ]}/>
        </div>
        <h2 class="content__title">Все пиццы</h2>
        <div class="content__items">
            {
            !isLoaded ? pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)
            : Array(10).fill(<PizzaLoader />)
            }
        </div>
      </div>
    );
};

export default Home;