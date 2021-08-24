import { combineReducers, createStore, applyMiddleware, compose  } from "redux";
import thunk from 'redux-thunk'
import pizzasReducer from "./pizzas-reducer";
import filterReducer from "./filter-reducer";
import cartReducer from './cart-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    filters: filterReducer,
    cart: cartReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))