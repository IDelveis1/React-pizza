import { combineReducers, createStore } from "redux";
import pizzasReducer from "./pizzas-reducer";
import filterReducer from "./filter-reducer";

const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    filters: filterReducer,
})

export const store = createStore(rootReducer)