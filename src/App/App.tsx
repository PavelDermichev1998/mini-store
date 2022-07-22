import React, {useCallback, useState} from 'react';
import {Products} from "../components/1s-Products/Products";
import {Basket} from "../components/2s-Basket/Basket";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {ProductsStateType} from "../store/productsReducer";
import {BasketType, ChangeAmountValueAC, removeBasketItemAC} from "../store/basketReducer";
import style from './App.module.css'
import {subtotal} from "../components/2s-Basket/utils/utils";

export const App = () => {

    const dispatch = useDispatch()

    const products = useSelector<AppRootStateType, ProductsStateType>(state => state.products)
    const basketItems = useSelector<AppRootStateType, Array<BasketType>>(state => state.basket)

    const productsTypes: string[] = []
    products.forEach(prod => {
        if (!productsTypes.includes(prod.TYPE)) {
            productsTypes.push(prod.TYPE)
        }
    })

    const [newProducts, setNewProducts] = useState(products)

    const filterForType = useCallback((productType: string) => {
        setNewProducts(products.filter(pr => pr.TYPE === productType))
    }, [products])

    const filterForAllType = useCallback(() => {
        setNewProducts(products)
    }, [products])

    const invoiceSubtotal = subtotal(basketItems);

    const changeAmount = useCallback((id: string, value: number) => {
        dispatch(ChangeAmountValueAC(id, value))
    },[])

    const removeBasketItem = useCallback((id: string) => {
        dispatch(removeBasketItemAC(id))
    },[])

    return (
        <div className={style.App}>
            <div className={style.App_text}>Каталог</div>
            <Products
                products={newProducts}
                filterForType={filterForType}
                productsTypes={productsTypes}
                filterForAllType={filterForAllType}
            />
            {basketItems.length
                ? <Basket
                    basketItems={basketItems}
                    invoiceSubtotal={invoiceSubtotal}
                    changeAmount={changeAmount}
                    removeBasketItem={removeBasketItem}
                />
                : <></>
            }
        </div>
    );
}

