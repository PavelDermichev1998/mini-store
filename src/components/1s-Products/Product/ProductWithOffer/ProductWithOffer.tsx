import React from 'react';
import {Button} from "@mui/material";
import {ProductsType} from "../../../../store/productsReducer";
import {addProductInBasketWithOfferAC} from "../../../../store/basketReducer";
import {useDispatch} from "react-redux";


export const ProductWithOffer = ({product, keyId, show}: ProductWithOfferPropsType) => {
    const dispatch = useDispatch()

    const addToBasketHandler = () => {
        dispatch(addProductInBasketWithOfferAC(product, keyId))
    };

    return (
        !show
            ? <div>
                <div>{product.SKU[keyId].NAME},</div>
                {product.SKU[keyId].LENGTH && <div>длинна - {product.SKU[keyId].LENGTH} мм,</div>}
                <div>{product.SKU[keyId].PRICE}$</div>
                <Button variant={'outlined'} onClick={addToBasketHandler}>Добавить в корзину</Button>
            </div>
            : <></>
    )
}


type ProductWithOfferPropsType = {
    product: ProductsType
    keyId: string
    show: boolean
}