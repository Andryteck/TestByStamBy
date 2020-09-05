import React, { useState } from 'react'
import Icons from '../../assets/svg/Icon'
import { useTranslation } from 'react-i18next'
import s from './header.module.scss'

import { langs } from '../../App'
import card from '../../assets/images/cart-2.svg'

function Header (props) {
  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    if (props.lang + 1 < langs.length) {
      props.setCurrentLanguage(props.lang + 1)
      i18n.changeLanguage(langs[props.lang + 1])
    } else {
      i18n.changeLanguage(langs[0])
      props.setCurrentLanguage(0)
    }
  }

  return (
    <div className={s.container__header}>
      <div className={s.header__language}>
        <div className={s.language__rex}>
          <Icons name='corex' />
        </div>
        <div className={s.language__earth} onClick={() => changeLanguage()}>
          <Icons name='earth' />
        </div>
        <p className={s.language__text} onClick={() => changeLanguage()}>
          {langs[props.lang]}
        </p>
      </div>
      <img src={card} />
    </div>
  )
}

export default Header
