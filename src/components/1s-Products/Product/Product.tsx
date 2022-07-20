import React, {useState} from 'react';
import {ProductsType} from "../../../store/productsReducer";
import {Button} from "@mui/material";
import {ProductWithOffer} from "./ProductWithOffer/ProductWithOffer";
import {useDispatch} from "react-redux";
import {addProductInBasketAC} from "../../../store/basketReducer";



export const Product = ({product, keysId}: ProductPropsType) => {
    const dispatch = useDispatch()

    const [show, setShow] = useState<boolean>(true)

    const SetViewMode = () => {
        setShow(!show)
    }

    const addToBasketHandler = () => {
        dispatch(addProductInBasketAC(product))
    };

    return (
        <div>
            <div className="img">{product.PICTURE}</div>
            <div>{product.NAME}</div>
            <div style={{padding: '10px'}}>
                {product.SKU && keysId
                    ? <div>
                        {keysId.map(keyId => (
                            <ProductWithOffer
                                keyId={keyId}
                                product={product}
                                show={show}
                                key={product.ID + keyId}
                            />))}
                        <Button variant={'contained'} onClick={SetViewMode} style={{margin: '10px'}}>
                            {show ? 'Подробнее' : 'Свернуть'}
                        </Button>
                    </div>
                    : <div>
                        <div>{product.PRICE}$</div>
                        <Button variant={'outlined'} onClick={addToBasketHandler}>Добавить в корзину</Button>
                    </div>
                }
            </div>
        </div>
    )
}

type ProductPropsType = {
    product: ProductsType
    keysId: Array<string> | null
}