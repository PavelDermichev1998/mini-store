import React, {useCallback, useState} from 'react';
import {ProductsType} from "../../../store/productsReducer";
import {Button} from "@mui/material";
import {ProductWithOffer} from "./ProductWithOffer/ProductWithOffer";
import {useDispatch} from "react-redux";
import {addProductInBasketAC, addProductInBasketWithOfferAC} from "../../../store/basketReducer";
import style from './Product.module.css'


export const Product = React.memo(({product, keysId}: ProductPropsType) => {

    const dispatch = useDispatch()

    const [show, setShow] = useState<boolean>(true)

    const SetViewMode = () => {
        setShow(!show)
    }

    const addToBasketHandler = useCallback(() => {
        dispatch(addProductInBasketAC(product))
    }, [product]);
   
    const addToBasketWithOfferHandler = useCallback((keyId: string) => {
        dispatch(addProductInBasketWithOfferAC(product, keyId))
    }, [product])

    return (
        <div className={style.product}>
            <div className="img">{product.PICTURE}</div>
            <div><b>{product.NAME}</b></div>
            <div className={style.product_block}>
                {product.SKU && keysId
                    ? <div>
                        {keysId.map(keyId => (
                            <ProductWithOffer
                                keyId={keyId}
                                product={product}
                                show={show}
                                key={product.ID + keyId}
                                addToBasketWithOfferHandler={addToBasketWithOfferHandler}
                            />))}
                        <Button variant={'contained'} onClick={SetViewMode} className={style.product_block__btn}>
                            {show ? 'Подробнее' : 'Свернуть'}
                        </Button>
                    </div>
                    : <div>
                        <div className={style.product_price}>{product.PRICE} руб.</div>
                        <Button variant={'outlined'} onClick={addToBasketHandler}>Добавить в корзину</Button>
                    </div>
                }
            </div>
        </div>
    )
})

type ProductPropsType = {
    product: ProductsType
    keysId: Array<string> | null
}