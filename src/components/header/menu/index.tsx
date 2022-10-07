// Lib
import React from 'react'

// Context
import { useMainContext } from '../../../context/MainContext'

// Styles
import * as SC from './styled.'

const Menu = () => {
  const { propsMessage } = useMainContext()

  console.log(`${propsMessage} Menu`)

  return (
    <SC.Menu>
      <li>
        <a href="/">home</a>
      </li>
      <li>
        <a href="/">about</a>
      </li>
      <li>
        <a href="/">contact</a>
      </li>
    </SC.Menu>
  )
}

export default Menu
