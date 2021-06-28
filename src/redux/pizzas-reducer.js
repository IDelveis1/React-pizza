

const initialState = {
    items: [],
    isLoaded: false,
}

const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload
            }
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }    
        default:
            return state        

    }
}


export const setPizzas = (items) => ({type: 'SET_PIZZAS', payload: items})


export default pizzasReducer