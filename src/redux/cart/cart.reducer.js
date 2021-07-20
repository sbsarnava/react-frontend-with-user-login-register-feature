import { cartActionTypes } from "./cart.types";

const initialState = {
    items: null
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case cartActionTypes.REMOVE_ITEM:
            //logic for removing item

            return {
                ...state
            }

        default:
            return state
    }
}


export default cartReducer