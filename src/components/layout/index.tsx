// Lib
import React, { ReactNode } from 'react'

// Context
import { useMainContext } from '../../context/MainContext'

// Components
import Header from '../header'

// Styles
import * as SC from './styled'

const Layout = ({ children }: { children: ReactNode }) => {
  const { propsMessage } = useMainContext()
  console.log(`${propsMessage} Layout`)

  return (
    <SC.Page data-testid="app">
      <Header />
      <SC.Main>{children}</SC.Main>
    </SC.Page>
  )
}

export default Layout
