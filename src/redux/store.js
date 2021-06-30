import { combineReducers, createStore, applyMiddleware, compose  } from "redux";
import thunk from 'redux-thunk'
import pizzasReducer from "./pizzas-reducer";
import filterReducer from "./filter-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    filters: filterReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))