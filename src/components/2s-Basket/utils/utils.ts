import {BasketType} from "../../../store/basketReducer";
import * as React from "react";

export const ccyFormat = (num: number) => {
    return `${num.toFixed(2)}`;
}

export const subtotal = (items: Array<BasketType>) => {
    return items.map(({TOTAL_PRICE, AMOUNT}) => TOTAL_PRICE * AMOUNT).reduce((sum, i) => sum + i, 0);
}

export const isNumber = (e: React.KeyboardEvent<HTMLInputElement>) => {
    let charCode = (e.which) ? e.which : e.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        e.preventDefault();
    } else if (e.which === 46) {
        e.preventDefault();
    } else {
        return true
    }
}