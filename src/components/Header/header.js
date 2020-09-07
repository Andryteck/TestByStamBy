import React from 'react'
import Icons from '../../assets/svg/Icon'
import s from './header.module.scss'
import card from '../../assets/images/cart-2.svg'
import {useSelector} from "react-redux";


function Header(props) {

    let cardCount = useSelector(state => state.card.productItem)
    return (
        <div className={s.container__header}>
            <div className={s.header__language}>
                <div className={s.language__corex}>
                    <Icons name='corex'/>
                </div>
                <div className={s.language__controls}>
                    <Icons name='controls'/>
                </div>
                <div className={s.language__rex}>
                    <Icons name='rex'/>
                </div>
                <div className={s.language__earth}>
                    <Icons name='earth'/>
                </div>
                <p className={s.language__text}>
                    ENG
                </p>
            </div>
            <div className={s.wrapper}><img src={card}/>
               <span className={s.cardCount} >{cardCount}</span>
            </div>

        </div>
    )
}

export default Header
