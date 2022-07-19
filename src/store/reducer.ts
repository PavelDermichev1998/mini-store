const products = require('./product.json')
const initialState: ProductsStateType = products

export const productsReducer = (state: ProductsStateType = initialState, action: ProductsActionsType): ProductsStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return state;
        }
        default:
            return state;
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', taskId: taskId, todolistId: todolistId}
}

export type ProductsStateType = Array<ProductsType>
export type ProductsType = {
    ID: string,
    NAME: string,
    SORT: string,
    TYPE: string,
    PICTURE: string,
    PRICE?: string,
    COLOR_CODE?: string,
    COLOR_SAMPLE?: string,
    COVER_SIDE?: string,
    WIDTH?: string,
    WEIGHT?: string,
    LENGTH?: string,
    STOCK?: string,
    SKU?: SKUType,
}
type SKUType = {[ID: string]: {
    ID: string,
    NAME: string,
    SORT: string,
    DEEP: number,
    LENGTH: number,
    PRICE: string,
    WEIGHT: number
}}


type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    todolistId: string
    taskId: string
}

export type ProductsActionsType = RemoveTaskActionType