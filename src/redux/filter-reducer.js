const initialState = {
    categories: null,
    sortBy: 'популярности',
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
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


export const setCategory = (categorIndex) => ({type: 'SET_CATEGORIES', payload: categorIndex})

export default filterReducer