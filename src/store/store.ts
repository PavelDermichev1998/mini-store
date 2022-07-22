import { combineReducers, createStore } from 'redux'
import { productsReducer} from "./productsReducer";
import { basketReducer} from "./basketReducer";


const rootReducer = combineReducers({
    products: productsReducer,
    basket: basketReducer,
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>
