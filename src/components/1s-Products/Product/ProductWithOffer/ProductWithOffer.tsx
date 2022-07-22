import React from 'react';
import {Button} from "@mui/material";
import {ProductsType} from "../../../../store/productsReducer";
import style from "../Product.module.css";

export const ProductWithOffer = ({product, keyId, show, addToBasketWithOfferHandler}: ProductWithOfferPropsType) => {



    return (
        !show
            ? <div>
                <div>{product.SKU[keyId].NAME},</div>
                {product.SKU[keyId].LENGTH && <div>длинна - {product.SKU[keyId].LENGTH} мм,</div>}
                <div className={style.product_price}>{product.SKU[keyId].PRICE} руб.</div>
                <Button
                    variant={'outlined'}
                    onClick={() => addToBasketWithOfferHandler(keyId)}
                    style={{marginBottom: '12px'}}
                >
                    Добавить в корзину
                </Button>
            </div>
            : <></>
    )
}


type ProductWithOfferPropsType = {
    product: ProductsType
    keyId: string
    show: boolean
    addToBasketWithOfferHandler: (keyId: string) => void
}