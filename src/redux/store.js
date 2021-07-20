import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './root-reducer'

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store)

