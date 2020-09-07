import React, { useState} from 'react';
import s from "../OnSaleContent/OnSaleContent.module.scss";
import CommonCorners from "../../common-style/common-corners";
import Icon from "../../../assets/svg/Icon";
import {useDispatch} from "react-redux";
import {addProductTC} from "../../../redux/card-reducer";


const OnSaleContent = (props) => {

    let dispatch = useDispatch()
    const [cardCount, setCardCount] = useState(0)
    const addProductToCard = (e) => {
        if (e.currentTarget.tagName === 'SPAN') {
            setCardCount(cardCount + 1)
            dispatch(addProductTC(cardCount))
        }
    }


    return (
        <div className={s.onsalecontent__item}>
            <div className={s.container__icons}>
                <span onClick={addProductToCard}><Icon name={'star'}/></span>
                <Icon name={'arrows'}/>
                <span className={s.title}>{props.release}</span>
                <span className={s.title}>{props.manufacturer}</span>
                <span className={s.title}>{props.model}</span>
                <span className={s.title}>{props.hash}</span>
                <span className={s.title}>{props.algorithm}</span>
                <span className={s.title}>{props.efficiency}</span>
                <span className={s.title}>{props.profit}<span>/day</span></span>
                <span>{props.minPrice}-{props.maxPrice}</span>
                <CommonCorners/>
            </div>

        </div>
    );
};

export default OnSaleContent;