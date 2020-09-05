import React from 'react'
import Filters from '../Filters/Filters'
import s from './Main.module.scss'
import {OnSale} from "../OnSale/OnSale";
import NewsList from "../NewsBar/NewsList";

function Main (props) {
  return (
    <div className={s.container__content}>
      <Filters />
        <OnSale/>
        <NewsList />
    </div>
  )
}

export default Main
