import React from 'react'
import { useTranslation } from 'react-i18next';
import s from './block-with-title.module.scss'

function BlockWithTitle ({title, children}) {

  return (
    <div className={s.container}>
      <h1 className={s.container__title}>{(title)}</h1>
      {children}
    </div>
  )
}

export default BlockWithTitle