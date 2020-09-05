import React from 'react';
import s from "./OnSaleHeader.module.scss";
import CommonCorners from "../../common-style/common-corners";


const OnSaleHeader = () => {
    return (
        <div className={s.onsaleheader__item}>
            <p className={s.item__title}>Release</p>
            <p className={s.item__title}>Manufacturer</p>
            <p className={s.item__title}>Model</p>
            <p className={s.item__title}>Hash</p>
            <p className={s.item__title}>Algorithm</p>
            <p className={s.item__title}>Efficiency</p>
            <p className={s.item__title}>Profit</p>
            <p className={s.item__title}>Price</p>
            <CommonCorners/>
        </div>
    );
};

export default OnSaleHeader;