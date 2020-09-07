import React from 'react'
import Filters from '../Filters/Filters'
import s from './Main.module.scss'
import {OnSale} from "../OnSale/OnSale";
import NewsList from "../NewsBar/NewsList";
import ContentMobile from "../common/content-mobile/ContentMobile";
import Content from "../Content/Content";

function Main(props) {
    return (
        <div className={s.container__content}>
            <Filters/>
            <Content/>
            <NewsList/>
        </div>
    )
}

export default Main
