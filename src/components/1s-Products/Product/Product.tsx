import React, {useState} from 'react';
import {ProductsType} from "../../../store/reducer";
import {Button} from "@mui/material";
import {ProductWithOffer} from "./ProductWithOffer/ProductWithOffer";


export const Product = ({product, keysId}: ProductPropsType) => {

    const [show, setShow] = useState<boolean>(true)

    const SetViewMode = () => {
        setShow(!show)
    }

     const addForBasketHandler = () => {

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
                        <Button variant={'outlined'} onClick={addForBasketHandler}>Добавить в корзину</Button>
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