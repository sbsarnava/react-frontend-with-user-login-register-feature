import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";


//Reducers
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer
})

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart', 'user']
}



export default persistReducer(rootPersistConfig, rootReducer)
