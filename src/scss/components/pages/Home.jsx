import React, { useEffect } from 'react';
import Categories from '../../../components/Categories/Categories';
import PizzaBlock from '../../../components/PizzaBlock/PizzaBlock';
import SortPopup from '../../../components/SortPopup/SortPopup';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSortType } from '../../../redux/filter-reducer';
import { useCallback } from 'react';
import PizzaLoader from '../../../components/PizzaLoader/PizzaLoader';
import { fetchPizzas } from '../../../redux/pizzas-reducer'
import { setCartPizzas } from '../../../redux/cart-reducer'


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
  })

  const onSelectSortType = useCallback((sortType, order) => {
    dispatch(setSortType(sortType, order))
  })



  const pizzas = useSelector(({ pizzas }) => pizzas.items)
  const addedPizzas = useSelector(({ cart }) => cart.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const categories = useSelector(({ filters }) => filters.categories)
  const sortType = useSelector(({ filters }) => filters.sortBy.sortType)
  const order = useSelector(({ filters }) => filters.sortBy.order)

  console.log(categories)

  useEffect(() => {
    dispatch(fetchPizzas(categories, sortType, order))
  }, [categories, sortType])

  const handleAddPizzaToCart = (obj) => {
    dispatch(setCartPizzas(obj))
  }

    return (
        <div class="container">
        <div class="content__top">
          <Categories onSelectItems={onSelectItems} categories={ categories } items={items}/>
          <SortPopup  sortType={sortType} onSelectSortType={onSelectSortType} items={[
            { name: 'популярности', sortType: 'rating', order: 'desc' },
            { name: 'цене', sortType: 'price', order: 'desc' },
            { name: 'алфавиту', sortType: 'name', order: 'asc' },
          ]}/>
        </div>
        <h2 class="content__title">Все пиццы</h2>
        <div class="content__items">
            {
            !isLoaded ? pizzas.map((obj) => <PizzaBlock addedPizzas={addedPizzas[obj.id] && addedPizzas[obj.id].items.length} onClickAddPizzas={handleAddPizzaToCart} key={obj.id} {...obj}/>)
            : Array(10).fill(<PizzaLoader />)
            }
        </div>
      </div>
    );
};

export default Home;