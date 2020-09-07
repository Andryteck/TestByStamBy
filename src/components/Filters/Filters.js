import React, { useState } from 'react'
import BlockWithTitle from '../common/block-with-title/block-with-title'
import Input from '../common/input/input'
import s from './Filters.module.scss'

function Filters () {
  const [isOpen, setIsOpen] = useState(true)


  return (
    <BlockWithTitle title='SORT BY'>
      <div className={s.container__filters}>
        <Input type='number' placeholder='By Manufacturer' />
        <Input type='number' placeholder='Minimum price' />
        <Input type='number' placeholder='Maximum price' />
      </div>
    </BlockWithTitle>
  )
}

export default Filters
