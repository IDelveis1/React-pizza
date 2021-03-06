import axios from "axios"


const initialState = {
    items: [],
    isLoaded: false,
}

const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload,
                isLoaded: false

            }
        case 'SET_PRE_LOADER': 
            return {
                ...state,
                isLoaded: action.payload
            }    
        default:
            return state        

    }
}


export const fetchPizzas = (categories, sortType, order) => (dispatch) => {
    dispatch(setPreLoader(true))
    axios.get(`/pizzas?${categories !== null ? `category=${categories}&` : ''}_sort=${sortType}&_order=${order}`).then(({ data }) => dispatch(setPizzas(data)))
}

export const setPizzas = (items) => ({type: 'SET_PIZZAS', payload: items})

export const setPreLoader = (isLoading) => ({type: "SET_PRE_LOADER", payload: isLoading})


export default pizzasReducer