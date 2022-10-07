// Lib
import React from 'react'

// Context
import { useMainContext } from '../../../context/MainContext'

// Styles
import * as SC from './styled'

const Logo = () => {
  const { propsMessage } = useMainContext()
  console.log(`${propsMessage} Logo`)

  return <SC.Logo to="/posts">React Blog</SC.Logo>
}

export default Logo
