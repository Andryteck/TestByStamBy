import React, {useEffect} from 'react';
import s from "./OnSaleHeader.module.scss";
import CommonCorners from "../../common-style/common-corners";


const OnSaleHeader = () => {

    return (
        <div className={s.onsaleheader__item}>
            <div className={s.container__title}>
                <p className={s.item__title}>Release</p>
                <p className={s.item__title}>Manufacturer</p>
                <p className={s.item__title}>Model</p>
            </div>
            <p className={s.item__title}>Hash</p>
            <div className={s.container__title}>
                <p className={s.item__title}>Algorithm</p>
                <p className={s.item__title}>Efficiency</p>
                <p className={s.item__title}>Profit</p>
            </div>
            <p className={s.item__title}>Price</p>
            <CommonCorners/>
        </div>
    );
};

export default OnSaleHeader;