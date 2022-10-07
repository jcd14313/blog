// Lib
import React from 'react'

// Context
import { useMainContext } from '../../context/MainContext'

// Components
import Logo from './logo'
import Menu from './menu'

// Styles
import { Container } from '../../globalStyles'
import * as SC from './styled'

const Header = () => {
  const { propsMessage } = useMainContext()
  console.log(`${propsMessage} Header`)

  return (
    <SC.NavBarContainer>
      <Container>
        <SC.LogoContainer>
          <Logo />
          <Menu />
        </SC.LogoContainer>
      </Container>
    </SC.NavBarContainer>
  )
}

export default Header
