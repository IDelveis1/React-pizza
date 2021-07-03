const initialState = {
    categories: null,
    sortBy: {
        sortType: 'rating',
        order: 'desc',
    },
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SORT_TYPE':
            return {
                ...state,
                sortBy: {sortType: action.sortType, order: action.order}
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

export const setSortType = (sortType, order) => ({type: 'SET_SORT_TYPE', sortType, order })

export default filterReducer