import {BasketType} from "../../../store/basketReducer";

export const ccyFormat = (num: number) => {
    return `${num.toFixed(2)}`;
}

export const subtotal = (items: Array<BasketType>) => {
    return items.map(({TOTAL_PRICE, AMOUNT}) => TOTAL_PRICE * AMOUNT).reduce((sum, i) => sum + i, 0);
}