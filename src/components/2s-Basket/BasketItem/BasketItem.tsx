import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {isNumber} from "../utils/utils";

export const BasketItem = ({id, name, amount, price, totalPrice, changeAmount, removeBasketItem}: BasketItemPropsType) => {

    const changeAmountHandler = (e: React.FormEvent<HTMLInputElement>) => {
        changeAmount(id, +e.currentTarget.value)
    }
    const removeItem = () => {
        removeBasketItem(id)
    }

    return (
        <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell align="left">
                <input type="number"
                       onKeyPress={(e) => isNumber(e)}
                       min={1}
                       value={amount}
                       onChange={changeAmountHandler}
                />
            </TableCell>
            <TableCell align="left">{price} руб.</TableCell>
            <TableCell align="left">{totalPrice} руб.</TableCell>
            <TableCell align="left">
                <IconButton onClick={removeItem}>
                    <Delete/>
                </IconButton>
            </TableCell>
        </TableRow>

    );
}

type BasketItemPropsType = {
    id: string
    name: string
    amount: number
    price: string
    totalPrice: string
    changeAmount: (id: string, value: number) => void
    removeBasketItem: (id: string) => void
}