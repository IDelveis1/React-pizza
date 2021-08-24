import axios from "axios"


const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const totalPriceCount = (arr) => arr.reduce((sum, obj) => sum + obj.price,0)

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CART_PIZZAS': {
            
            const currentPizzas = !state.items[action.payload.id] ? 
                    [action.payload]
                    :[...state.items[action.payload.id].items,
                    action.payload]
            const pizzasCost = totalPriceCount(currentPizzas)        
            const newItems = {
                    ...state.items,
                    [action.payload.id]: {
                        items: currentPizzas,
                        totalPrice: pizzasCost
                    }
                }
            const arrPizzas = [].concat(...Object.values(newItems).map(obj => obj.items))
            return {
                ...state,
                items: newItems,
                totalPrice: totalPriceCount(arrPizzas),
                totalCount: arrPizzas.length,
        }
        }
        case 'MINUS_CART_ITEM' : {
            const oldItems = state.items[action.payload].items
            const newObjItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems       
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: totalPriceCount(newObjItems)
                }
            }     
            const arrPizzas = [].concat(...Object.values(newItems).map(obj => obj.items))
            return (
                {
                    ...state,
                    items: newItems,
                    totalPrice: totalPriceCount(arrPizzas),
                    totalCount: arrPizzas.length,
                }
            )
        }

        case 'PLUS_CART_ITEM' : {
            const oldItems = state.items[action.payload].items 
            const newObjItems = [...oldItems, oldItems[0]]

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: totalPriceCount(newObjItems)
                }
            }     
            const arrPizzas = [].concat(...Object.values(newItems).map(obj => obj.items))
            return (
                {
                    ...state,
                    items: newItems,
                    totalPrice: totalPriceCount(arrPizzas),
                    totalCount: arrPizzas.length,
                }
            )
        }
        
        case 'REMOVE_PIZZAS': {
            const newItems = {
                ...state.items
            }
            const deletedPrice = newItems[action.payload].totalPrice
            const deletedCount = newItems[action.payload].items.length
            delete newItems[action.payload]
            
            return (
                {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - deletedPrice,
                totalCount: state.totalCount - deletedCount
                })
        }
        case 'CLEAR_PIZZAS': 
            return {
                items: [],
                totalPrice: 0,
                totalCount: 0,
            }    
        default:
            return state        

    }
}



export const setCartPizzas = (objPizzas) => ({type: 'ADD_CART_PIZZAS', payload: objPizzas})

export const removePizzas = (id) => ({type: 'REMOVE_PIZZAS', payload: id})

export const minusCartItem = (id) => ({type: 'MINUS_CART_ITEM', payload: id})

export const plusCartItem= (id) => ({type: 'PLUS_CART_ITEM', payload: id})

export const clearPizzas = () => ({type: 'CLEAR_PIZZAS'})


export default cartReducer