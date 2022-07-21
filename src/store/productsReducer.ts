
const products = require('./product.json')
const initialState: ProductsStateType = products

export const productsReducer = (state: ProductsStateType = initialState): ProductsStateType => {
            return state;
}

export type ProductsStateType = Array<ProductsType>
export type ProductsType = {
    ID: string,
    NAME: string,
    SORT: string,
    TYPE: string,
    PICTURE: string,
    PRICE: string,
    COLOR_CODE?: string,
    COLOR_SAMPLE?: string,
    COVER_SIDE?: string,
    WIDTH?: string,
    WEIGHT?: string,
    LENGTH?: string,
    STOCK?: string,
    SKU: SKUType,
}
export type SKUType = {[ID: string]: {
    ID: string,
    NAME: string,
    SORT: string,
    DEEP: number,
    LENGTH: number,
    PRICE: string,
    WEIGHT: number
}}