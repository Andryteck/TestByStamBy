import React from "react";
import BlockWithTitle from "../common/block-with-title/block-with-title";
import OnSaleHeader from "./OnSaleHeader/OnSaleHeader";
import OnSaleContent from "./OnSaleContent/OnSaleContent";
import s from './OnSale.module.scss'

export function OnSale(props) {
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <BlockWithTitle title='ON SALE'>
            <div className={s.onsale__container}>
                <OnSaleHeader/>
                {
                    a.map(i => <OnSaleContent key={i}/>)}

            </div>
        </BlockWithTitle>
    )
}