import React from 'react';
import s from "../OnSaleHeader/OnSaleHeader.module.scss";
import CommonCorners from "../../common-style/common-corners";

const OnSaleContent = ({children,title}) => {
    return (
        <div className={s.onsalecontent__item}>
            {children}
            <p className={s.item__title}>{title}</p>
            <CommonCorners/>
        </div>
    );
};

export default OnSaleContent;