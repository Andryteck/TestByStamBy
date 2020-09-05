import React, { useState } from 'react'
import BlockWithTitle from '../common/block-with-title/block-with-title'
import SelectBlock from '../common/select-block/select-block'
import Input from '../common/input/input'
import CommonCorners from '../common-style/common-corners'
import SelectItem from '../common/select-item/select-item'
import btc from '../../assets/images/bch.svg'
import ppc from '../../assets/images/ppc.svg'
import etp from '../../assets/images/etp.svg'
import { useTranslation } from 'react-i18next';
import s from './Filters.module.scss'

function Filters () {
  const [isOpen, setIsOpen] = useState(true)

  const{t, i18n} = useTranslation();

  return (
    <BlockWithTitle title='SORT BY'>
      <form className={s.container__filters}>
        <Input type='number' placeholder='By Manufacturer' />
        <Input type='number' placeholder='Minimum price' />
        <Input type='number' placeholder='Maximum price' />
        <button className={s.filters__button}>
          {t('filters.search')}
          <CommonCorners />
        </button>
      </form>
    </BlockWithTitle>
  )
}

export default Filters
