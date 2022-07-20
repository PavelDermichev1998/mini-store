import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch} from "react-redux";
import {BasketType, ChangeAmountValueAC, removeBasketItemAC} from "../../store/basketReducer";
import {BasketItem} from "./BasketItem/BasketItem";



const ccyFormat = (num: number) => {
    return `${num.toFixed(2)}`;
}

const subtotal = (items: Array<BasketType>) => {
    return items.map(({ TOTAL_PRICE, AMOUNT }) => TOTAL_PRICE * AMOUNT).reduce((sum, i) => sum + i, 0);
}

export const Basket = ({basketItems} : BasketPropsType) => {
    const invoiceSubtotal = subtotal(basketItems);
    const dispatch = useDispatch()

    const changeAmount = (id: string, value: number) => {
        dispatch(ChangeAmountValueAC(id, value))
    }
    const removeBasketItem = (id: string) => {
        dispatch(removeBasketItemAC(id))
    }

    return (<div style={{margin: '10px'}}>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Наименование</TableCell>
                            <TableCell align="left">Кол-во</TableCell>
                            <TableCell align="left">Цена/шт.</TableCell>
                            <TableCell align="left">Сумма</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {basketItems.map((prod) => (
                            <BasketItem
                                key={prod.ID + prod.NAME}
                                id={prod.ID}
                                name ={prod.NAME}
                                amount={prod.AMOUNT}
                                price={prod.PRICE}
                                totalPrice={ccyFormat(prod.TOTAL_PRICE * prod.AMOUNT)}
                                changeAmount={changeAmount}
                                removeBasketItem={removeBasketItem}
                            />
                        ))}
                        <TableRow>
                            <TableCell rowSpan={3}/>
                            <TableCell colSpan={2}>Итого</TableCell>
                            <TableCell align="left">{ccyFormat(invoiceSubtotal)}$</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

type BasketPropsType = {
    basketItems: Array<BasketType>
}