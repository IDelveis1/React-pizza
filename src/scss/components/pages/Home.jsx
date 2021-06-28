import React from 'react';
import Categories from '../../../components/Categories/Categories';
import PizzaBlock from '../../../components/PizzaBlock/PizzaBlock';
import SortPopup from '../../../components/SortPopup/SortPopup';
import { useSelector } from 'react-redux';
const Home = () => {

  const { pizzas } = useSelector(({ pizzas }) => {
    return({
      pizzas: pizzas.items
    })
  })

    return (
        <div class="container">
        <div class="content__top">
          <Categories items={[
            'Мясные',
            'Вегетарианская',
            'Гриль',
            'Острые',
            'Закрытые',
          ]}/>
          <SortPopup items={[
            {name: 'популярности', type: 'popular'},
            {name: 'цене', type: 'price'},
            {name: 'алфавиту', type: 'alphabet'},
          ]}/>
        </div>
        <h2 class="content__title">Все пиццы</h2>
        <div class="content__items">
            {
            pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj}/>) 
            }
        </div>
      </div>
    );
};

export default Home;