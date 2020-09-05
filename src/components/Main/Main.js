import React from 'react'
import Filters from '../Filters/Filters'
import s from './Main.module.scss'

function Main (props) {
  return (
    <div className={s.container__content}>
      <Filters />
    </div>
  )
}

export default Main
