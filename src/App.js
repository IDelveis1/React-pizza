import './scss/app.scss';
import Header from './components/Header/Header';
import Home from './scss/components/pages/Home';
import {Route} from 'react-router-dom'
import Cart from './scss/components/pages/Cart';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPizzas, setPizzas } from './redux/pizzas-reducer';
import axios from 'axios';


function App() {

  const dispatch = useDispatch()
 


useEffect(() => {
  dispatch(fetchPizzas())
}, [])

  return (
    <div class="wrapper">
     <Header />
      <div class="content">
        <Route exact path='/' component={ Home } />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  );
}



export default App;

