import React from "react";
import BlockWithTitle from "../common/block-with-title/block-with-title";
import OnSaleHeader from "./OnSaleHeader/OnSaleHeader";
import OnSaleContent from "./OnSaleContent/OnSaleContent";
import s from './OnSale.module.scss'

export function OnSale(props) {
    return (
        <BlockWithTitle title='ON SALE'>
            <div className={s.onsale__container}>
            <OnSaleHeader/>
            <OnSaleContent/>
            </div>
        </BlockWithTitle>
    )
}