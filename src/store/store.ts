import { combineReducers, createStore } from 'redux'
import {ProductsActionsType, productsReducer} from "./reducer";


const rootReducer = combineReducers({
    products: productsReducer,
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AllActionType = ProductsActionsType

// @ts-ignore
window.store = store;