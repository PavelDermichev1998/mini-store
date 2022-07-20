import {ProductsType} from "./productsReducer";

const initialState: Array<BasketType> = []

export const basketReducer = (state: Array<BasketType> = initialState, action: BasketActionsType): Array<BasketType> => {
    switch (action.type) {
        case 'ADD-PRODUCT': {
            const basketId: Array<string> = []
            state.map(pr => basketId.push(pr.ID))
            if (basketId.includes(action.product.ID)) {
                return state.map(pr => pr.ID === action.product.ID ? {...pr, AMOUNT: +pr.AMOUNT + 1} : {...pr})
            } else {
                return [...state, {
                    ID: action.product.ID,
                    NAME: action.product.NAME,
                    AMOUNT: 1,
                    PRICE: action.product.PRICE,
                    TOTAL_PRICE: +action.product.PRICE,
                }];
            }
        }
        case 'ADD-PRODUCT-WITH-OFFER': {
            const basketId: Array<string> = []
            state.map(pr => basketId.push(pr.ID))
            if (basketId.includes(action.product.SKU[action.SKUId].ID)) {
                return state.map(pr => pr.ID === action.product.SKU[action.SKUId].ID ? {...pr, AMOUNT: +pr.AMOUNT + 1} : {...pr})
            } else {
                return [...state, {
                    ID: action.product.SKU[action.SKUId].ID,
                    NAME: action.product.SKU[action.SKUId].NAME,
                    AMOUNT: 1,
                    PRICE: action.product.SKU[action.SKUId].PRICE,
                    TOTAL_PRICE: +action.product.SKU[action.SKUId].PRICE,
                }];
            }
        }
        case 'CHANGE-AMOUNT-IN-BASKET': {
            return state.map(pr => pr.ID === action.id ? {...pr, AMOUNT: action.value} : {...pr})
        }
        case 'REMOVE-BASKET-ITEM': {
            return state.filter(pr => pr.ID !== action.id)
        }
        default:
            return state;
    }
}

export const addProductInBasketAC = (product: ProductsType) => {
    return {type: 'ADD-PRODUCT', product} as const
}
export const addProductInBasketWithOfferAC = (product: ProductsType, SKUId: string) => {
    return {type: 'ADD-PRODUCT-WITH-OFFER', product, SKUId} as const
}
export const ChangeAmountValueAC = (id: string, value: number) => {
    return {type: 'CHANGE-AMOUNT-IN-BASKET', id, value} as const
}
export const removeBasketItemAC = (id: string) => {
    return {type: 'REMOVE-BASKET-ITEM', id} as const
}

export type BasketType = {
    ID: string,
    NAME: string,
    AMOUNT: number,
    PRICE: string,
    TOTAL_PRICE: number
}

type AddBasketActionType = ReturnType<typeof addProductInBasketAC>
type AddBasketWithOfferActionType = ReturnType<typeof addProductInBasketWithOfferAC>
type ChangeAmountValueActionType = ReturnType<typeof ChangeAmountValueAC>
type RemoveBasketItemActionType = ReturnType<typeof removeBasketItemAC>

export type BasketActionsType = AddBasketActionType
    | AddBasketWithOfferActionType
    | ChangeAmountValueActionType
    | RemoveBasketItemActionType

