import React from 'react';
import s from "../OnSaleContent/OnSaleContent.module.scss";
import CommonCorners from "../../common-style/common-corners";
import Icon from "../../../assets/svg/Icon";

const OnSaleContent = () => {

    return (
        <div className={s.onsalecontent__item}>
            <Icon name={'star'}/>
            <Icon name={'arrows'}/>
            <span>Mar 2019</span>
            <span>Bitmain</span>
            <span>S9i</span>
            <span>10.5-14.5 th/s</span>
            <span>SHA-256</span>
            <span>8.00j/H/s</span>
            <span>$1111</span>
            <span>$137.00-$217.00</span>
            <CommonCorners/>
        </div>
    );
};

export default OnSaleContent;