import React from 'react';
import {Button} from "@mui/material";
import {ProductsType} from "../../../../store/reducer";


export const ProductWithOffer = ({product, keyId, show}: ProductWithOfferPropsType) => {

    return (
        !show
            ? <div>
                <div>{product.SKU[keyId].NAME},</div>
                {product.SKU[keyId].LENGTH && <div>длинна - {product.SKU[keyId].LENGTH} мм,</div>}
                <div>{product.SKU[keyId].PRICE}$</div>
                <Button variant={'outlined'}>Добавить в корзину</Button>
            </div>
            : <div></div>
    )
}


type ProductWithOfferPropsType = {
    product: ProductsType
    keyId: string
    show: boolean
}